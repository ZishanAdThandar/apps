#!/usr/bin/env python3

import tkinter as tk
from tkinter import ttk
from tkinter import filedialog
import subprocess

print("NMAP GUI with Python3 for Linux")
print("by")
print("Zishan Ahamed Thandar")

# Function to perform nmap scan
def scan_ip():
    target_ip = ip_entry.get()
    scan_type = scan_type_var.get()

    # Disable the scan button to prevent multiple scans
    scan_button.config(state=tk.DISABLED)

    # Clear previous output
    output_text.delete('1.0', tk.END)

    try:
        if scan_type == "Quick Scan":
            command = f"nmap {target_ip} -T5"
        elif scan_type == "Quick Scan All Ports":
            command = f"nmap {target_ip} -p- -T5"
        elif scan_type == "Aggressive Scan":
            command = f"nmap -A {target_ip} -T5"
        elif scan_type == "UDP Scan":
            command = f"nmap -sU {target_ip} -T5"
        elif scan_type == "Ping Scan":
            command = f"nmap -sn {target_ip} -T5"
        elif scan_type == "Aggressive Scan All Ports":
            command = f"nmap -A -Pn -p- {target_ip} -T5"

        result = subprocess.run(command, shell=True, capture_output=True, text=True)

        # Insert the nmap output
        output_text.insert(tk.END, result.stdout)
        if result.stderr:
            output_text.insert(tk.END, f"\nErrors:\n{result.stderr}")

        # Enable the scan button again after the scan completes
        scan_button.config(state=tk.NORMAL)
        
    except Exception as e:
        output_text.delete('1.0', tk.END)  # Clear the text widget
        output_text.insert(tk.END, f"An error occurred: {str(e)}")  # Insert the error message
        scan_button.config(state=tk.NORMAL)

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

# Scan type dropdown
scan_type_var = tk.StringVar()
scan_type_var.set("Quick Scan")
scan_type_label = tk.Label(root, text="Scan Type:")
scan_type_label.grid(row=1, column=0, padx=5, pady=5)
scan_type_dropdown = ttk.Combobox(root, textvariable=scan_type_var)
scan_type_dropdown['values'] = ("Quick Scan", "Quick Scan All Ports", "Aggressive Scan", "UDP Scan", "Ping Scan", "Aggressive Scan All Ports")
scan_type_dropdown.grid(row=1, column=1, padx=5, pady=5)

# Scan button
scan_button = tk.Button(root, text="Scan", command=scan_ip)
scan_button.grid(row=2, column=0, columnspan=2, pady=10)

# Save Output button
save_button = tk.Button(root, text="Save Output", command=save_output)
save_button.grid(row=2, column=1, padx=5, pady=10)

# Output text widget with scrollbar
output_frame = tk.Frame(root)
output_frame.grid(row=3, column=0, columnspan=2, padx=5, pady=5)

scrollbar = tk.Scrollbar(output_frame)
scrollbar.pack(side=tk.RIGHT, fill=tk.Y)

output_text = tk.Text(output_frame, height=15, width=50, yscrollcommand=scrollbar.set)
output_text.pack(side=tk.LEFT, fill=tk.BOTH)
scrollbar.config(command=output_text.yview)

# Run the application
root.mainloop()
