import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  ScrollView,
  View,
  StatusBar,
  TextInput,
  Image,
  Linking,
} from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ledlight1: '',
      ledlight2: '',
      ledlight3: '',
      tubelight1: '',
      fan1: '',
      ledtv1: '',
      laptop1: '',
      fridge1: '',
      fridge2: '',
      ac1: '',
      ac2: '',
      wm1: '',
      microwave1: '',
      induction1: '',
      waterpump1: '',
      dishwash1: '',
      geyser1: '',
      voltage: '12',
      inverter: '',
      batteryahbuy: '',
      backuptime: '8',
      panelwatt: '300',
      isVisible: true,
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ isVisible: false });
    }, 2000);
  }

  openWeb = () => {
    Linking.openURL('instagram://user?username=ZishanAdThandar').catch(() => {
      Linking.openURL('https://www.instagram.com/ZishanAdThandar');
    });
  };

  calculate = () => {
    const s = this.state;
    const totalwatt =
      (Number(s.ledlight1) * 22) +
      (Number(s.ledlight2) * 10) +
      (Number(s.ledlight3) * 5) +
      (Number(s.tubelight1) * 40) +
      (Number(s.fan1) * 80) +
      (Number(s.ledtv1) * 100) +
      (Number(s.laptop1) * 65) +
      (Number(s.fridge1) * 150) +
      (Number(s.fridge2) * 80) +
      (Number(s.ac1) * 1500) +
      (Number(s.ac2) * 1000) +
      (Number(s.wm1) * 500) +
      (Number(s.microwave1) * 1000) +
      (Number(s.induction1) * 2100) +
      (Number(s.waterpump1) * 1000) +
      (Number(s.dishwash1) * 1500) +
      (Number(s.geyser1) * 2000);

    const invertercurrent = Math.ceil(s.inverter / s.voltage);
    const batteryah = Math.ceil((s.inverter * s.backuptime) / s.voltage);
    const batterychargingcurrent = Math.ceil(s.batteryahbuy / 10);
    const solarcurrent = (batterychargingcurrent + invertercurrent) * 14;
    const panel = Math.ceil(solarcurrent / s.panelwatt);

    return { totalwatt, invertercurrent, batteryah, batterychargingcurrent, solarcurrent, panel };
  };

  renderInput = (label, stateKey) => (
    <>
      <Text style={styles.text}>{label}</Text>
      <TextInput
        style={styles.textinput}
        placeholderTextColor="#8899a6"
        placeholder="0"
        keyboardType="number-pad"
        onChangeText={(text) => this.setState({ [stateKey]: text })}
        value={this.state[stateKey]}
      />
    </>
  );

  render() {
    const {
      totalwatt,
      invertercurrent,
      batteryah,
      batterychargingcurrent,
      solarcurrent,
      panel,
    } = this.calculate();

    return (
      <ScrollView style={{ flexGrow: 1 }}>
        <View style={styles.container}>
          <Text style={styles.header}>Load Calculator</Text>

          {this.renderInput('LED Light (22W)', 'ledlight1')}
          {this.renderInput('LED Light (10W)', 'ledlight2')}
          {this.renderInput('LED Light (5W)', 'ledlight3')}
          {this.renderInput('Tubelight (40W)', 'tubelight1')}
          {this.renderInput('Fan (80W)', 'fan1')}
          {this.renderInput('LED TV (100W)', 'ledtv1')}
          {this.renderInput('Laptop (65W)', 'laptop1')}
          {this.renderInput('Fridge Big (150W)', 'fridge1')}
          {this.renderInput('Fridge Normal (80W)', 'fridge2')}
          {this.renderInput('AC 1.5 ton (1500W)', 'ac1')}
          {this.renderInput('AC 1 ton (1000W)', 'ac2')}
          {this.renderInput('Washing Machine (500W)', 'wm1')}
          {this.renderInput('Microwave (1000W)', 'microwave1')}
          {this.renderInput('Induction (2100W)', 'induction1')}
          {this.renderInput('Water Pump (1000W)', 'waterpump1')}
          {this.renderInput('DishWasher (1500W)', 'dishwash1')}
          {this.renderInput('Geyser (2000W)', 'geyser1')}

          <Text style={styles.result}>Total Load is {totalwatt} VA.</Text>
          <Text style={styles.header}>Main Calculator</Text>
          <Text style={styles.result}>You need a Solar Inverter more than {totalwatt} VA.</Text>

          {this.renderInput('Voltage (V)', 'voltage')}
          {this.renderInput('Backup time (Hrs)', 'backuptime')}
          {this.renderInput('Inverter you purchased (watt)*', 'inverter')}
          <Text style={styles.result}>Inverter Current {invertercurrent} Amp.</Text>
          <Text style={styles.result}>Battery needed {batteryah} Ah.</Text>
          {this.renderInput('Battery you purchased (Ah)*', 'batteryahbuy')}
          <Text style={styles.result}>Battery charging current {batterychargingcurrent} Amp.</Text>
          <Text style={styles.result}>Panel Power required (14V) {solarcurrent} W.</Text>
          {this.renderInput('Panel Watt', 'panelwatt')}
          <Text style={styles.result}>Solar Panel needed {panel} piece to get required current.</Text>

          <Text onPress={this.openWeb} style={styles.footerLink}>Coded By @ZishanAdThandar</Text>
          <StatusBar style="auto" />
          {this.state.isVisible && (
            <View style={styles.SplashScreen_RootView}>
              <View style={styles.SplashScreen_ChildView}>
                <Image
                  source={require('./assets/panel.png')}
                  style={{ width: '100%', height: '100%', resizeMode: 'contain' }}
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#192734',
    alignItems: 'center',
    margin: 2,
    padding: 2,
  },
  text: {
    width: '75%',
    fontWeight: 'bold',
    fontSize: 18,
    color: '#8899a6',
  },
  textinput: {
    width: '25%',
    fontSize: 18,
    color: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#8899a6',
  },
  header: {
    width: '100%',
    backgroundColor: 'green',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#ffffff',
    padding: 5,
    marginVertical: 10,
    textAlign: 'center',
  },
  result: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green',
    marginTop: 10,
  },
  footerLink: {
    width: '100%',
    backgroundColor: 'green',
    fontSize: 12,
    fontWeight: 'bold',
    textAlign: 'right',
    color: 'pink',
    padding: 5,
  },
  SplashScreen_RootView: {
    justifyContent: 'center',
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  SplashScreen_ChildView: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    flex: 1,
  },
});
