#!/usr/bin/env python3

import tkinter as tk
from tkinter import ttk
from tkinter import filedialog
import subprocess
import threading

print("NMAP GUI with Python3 for Linux")
print("by")
print("Zishan Ahamed Thandar")

# Global variable to keep track of the subprocess
process = None

# Function to update the displayed command
def update_command_display(*args):
    target_ip = ip_entry.get()
    scan_type = scan_type_var.get()
    command = get_command(scan_type, target_ip)
    command_text.set(command)
    command_label.config(fg="black")  # Reset color to black

# Function to perform nmap scan
def scan_ip():
    global process

    # Cancel previous scan if it is running
    if process and process.poll() is None:
        process.terminate()
        process.wait()  # Wait for the process to terminate

    target_ip = ip_entry.get()
    scan_type = scan_type_var.get()

    # Update and color command
    command = get_command(scan_type, target_ip)
    command_text.set(command)
    command_label.config(fg="red")  # Set color to red when scan starts

    # Clear previous output
    output_text.delete('1.0', tk.END)

    def run_scan():
        global process

        command = get_command(scan_type, target_ip)
        process = subprocess.Popen(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.PIPE, text=True)

        # Read the output live
        for line in iter(process.stdout.readline, ''):
            output_text.insert(tk.END, line)
            output_text.yview(tk.END)  # Auto-scroll to the end

        # If there are any errors, display them
        stderr = process.stderr.read()
        if stderr:
            output_text.insert(tk.END, f"\nErrors:\n{stderr}")

        process.stdout.close()
        process.stderr.close()

        # Update color to green after scan completion
        command_label.config(fg="green")
    
    # Run the scan in a separate thread
    scan_thread = threading.Thread(target=run_scan)
    scan_thread.start()

def get_command(scan_type, target_ip):
    if scan_type == "Quick Scan":
        return f"nmap {target_ip} -T5"
    elif scan_type == "Quick Scan All Ports":
        return f"nmap {target_ip} -p- -T5"
    elif scan_type == "Aggressive Scan":
        return f"nmap -A {target_ip} -T5"
    elif scan_type == "UDP Scan":
        return f"nmap -sU {target_ip} -T5"
    elif scan_type == "Ping Scan":
        return f"nmap -sn {target_ip} -T5"
    elif scan_type == "Aggressive Scan All Ports":
        return f"nmap -A -Pn -p- {target_ip} -T5"

# Function to save the output to a file
def save_output():
    try:
        # Open a file dialog to choose the save location
        file_path = filedialog.asksaveasfilename(defaultextension=".txt",
                                               filetypes=[("Text files", "*.txt"),
                                                          ("All files", "*.*")])
        if file_path:
            with open(file_path, "w") as file:
                file.write(output_text.get('1.0', tk.END))
    except Exception as e:
        print(f"An error occurred while saving the file: {str(e)}")

# Main application window
root = tk.Tk()
root.title("PyNmap Scanner by ZishanAdThandar")

# IP address entry
ip_label = tk.Label(root, text="Target IP:")
ip_label.grid(row=0, column=0, padx=5, pady=5)
ip_entry = tk.Entry(root)
ip_entry.grid(row=0, column=1, padx=5, pady=5)
ip_entry.bind("<KeyRelease>", update_command_display)  # Update command on IP change

# Scan type dropdown
scan_type_var = tk.StringVar()
scan_type_var.set("Quick Scan")
scan_type_label = tk.Label(root, text="Scan Type:")
scan_type_label.grid(row=1, column=0, padx=5, pady=5)
scan_type_dropdown = ttk.Combobox(root, textvariable=scan_type_var)
scan_type_dropdown['values'] = ("Quick Scan", "Quick Scan All Ports", "Aggressive Scan", "UDP Scan", "Ping Scan", "Aggressive Scan All Ports")
scan_type_dropdown.grid(row=1, column=1, padx=5, pady=5)
scan_type_var.trace_add('write', update_command_display)  # Update command on scan type change

# Scan button
scan_button = tk.Button(root, text="Scan", command=scan_ip)
scan_button.grid(row=2, column=0, columnspan=2, pady=10)

# Save Output button
save_button = tk.Button(root, text="Save Output", command=save_output)
save_button.grid(row=2, column=1, padx=5, pady=10)

# Command display
command_text = tk.StringVar()
command_label = tk.Label(root, textvariable=command_text)
command_label.grid(row=3, column=0, columnspan=2, padx=5, pady=5)

# Output text widget with scrollbar
output_frame = tk.Frame(root)
output_frame.grid(row=4, column=0, columnspan=2, padx=5, pady=5)

scrollbar = tk.Scrollbar(output_frame)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

output_text = tk.Text(output_frame, height=15, width=50, yscrollcommand=scrollbar.set)
output_text.pack(side=tk.LEFT, fill=tk.BOTH)
scrollbar.config(command=output_text.yview)

# Initialize the command display
update_command_display()

# Run the application
root.mainloop()
