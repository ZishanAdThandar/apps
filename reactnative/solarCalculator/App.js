import React, {Component} from 'react';
import { StyleSheet, Text, ScrollView, View, StatusBar, TextInput, Button, Image, Linking } from 'react-native';


export default class App extends React.Component  {

  constructor(props) {
      super(props);
      this.state = {

          ledlight1:"",
          ledlight2:"",
          ledlight3:"",
          tubelight1:"",
          fan1:"",
          ledtv1:"",
          laptop1:"",
          fridge1:"",
          fridge2:"",
          ac1:"",
          ac2:"",
          wm1:"",
          microwave1:"",
          induction1:"",
          waterpump1:"",
          dishwash1:"",
          geyser1:"",
          voltage:"12",
          inverter:"",
          batteryahbuy:"",
          backuptime:"8",
          panelwatt: "300",
          isVisible : true,
     };
    }

    Hide_Splash_Screen=()=>{
     this.setState({
       isVisible : false
     });
   }

   componentDidMount(){
     var that = this;
     setTimeout(function(){
       that.Hide_Splash_Screen();
     }, 2000);
    }

    OpenWEB=()=>{
      Linking.openURL('instagram://user?username=ZishanAdThandar')
      .catch(() => {
        Linking.openURL('https://www.instagram.com/ZishanAdThandar');
      })
    };


render(){
  const totalwatt = (Number(this.state.ledlight1)*22)+(Number(this.state.ledlight2)*10)+(Number(this.state.ledlight3)*5)+(Number(this.state.tubelight1)*40)+(Number(this.state.fan1)*80)+(Number(this.state.ledtv1)*100)+(Number(this.state.laptop1)*65)+(Number(this.state.fridge1)*150)+(Number(this.state.fridge2)*80)+(Number(this.state.ac1)*1500)+(Number(this.state.ac2)*1000)+(Number(this.state.wm1)*500)+(Number(this.state.microwave1)*1000)+(Number(this.state.induction1)*2100)+(Number(this.state.waterpump1)*1000)+(Number(this.state.dishwash1)*1500)+(Number(this.state.geyser1)*2000);
  const invertercurrent1 = Math.ceil(this.state.inverter/this.state.voltage);
  const invertercurrent = invertercurrent1.toString();
  const batteryah1 = (this.state.inverter*this.state.backuptime);
  const batteryah2 = Math.ceil(batteryah1/this.state.voltage);
  const batteryah = batteryah2.toString();
  const batterychargingcurrent = Math.ceil(this.state.batteryahbuy/10);
  const solarcurrent1 = (batterychargingcurrent+invertercurrent1)*14;
  const solarcurrent = solarcurrent1.toString();
  const mathpanel = Math.ceil(solarcurrent1/this.state.panelwatt);
  const panel = mathpanel.toString();

  let Splash_Screen = (
     <View style={styles.SplashScreen_RootView}>
         <View style={styles.SplashScreen_ChildView}>
               <Image source={require('./assets/panel.png')}
            style={{width:'100%', height: '100%', resizeMode: 'contain'}} />
        </View>
     </View> )


    return (
    <ScrollView style={{ flexGrow: 1 }}>
    <View style={styles.container}>
    <Text style={{width:'100%', color: '#ffffff', backgroundColor: 'green', fontSize: 20, fontWeight: 'bold'}}>Load Calculator</Text>
    <Text style={styles.texth2}>Device</Text>
    <Text style={styles.texth3}>Quantity</Text>

    <Text style={styles.text}>LED Light (22W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({ledlight1: text})}
    value={this.state.ledlight1}/>

    <Text style={styles.text}>LED Light (10W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({ledlight2: text})}
    value={this.state.ledlight2}/>

    <Text style={styles.text}>LED Light (5W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({ledlight3: text})}
    value={this.state.ledlight3}/>

    <Text style={styles.text}>Tubelight (40W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({tubelight1: text})}
    value={this.state.tubelight1}/>

    <Text style={styles.text}>Fan (80W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({fan1: text})}
    value={this.state.fan1}/>

    <Text style={styles.text}>LED TV (100W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({ledtv1: text})}
    value={this.state.ledtv11}/>

    <Text style={styles.text}>Laptop (65W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({laptop1: text})}
    value={this.state.laptop1}/>

    <Text style={styles.text}>Fridge Big (150W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({fridge1: text})}
    value={this.state.fridge1}/>

    <Text style={styles.text}>Fridge Normal (80W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({fridge2: text})}
    value={this.state.fridge2}/>


    <Text style={styles.text}>AC 1.5 ton (1500W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({ac1: text})}
    value={this.state.ac1}/>

    <Text style={styles.text}>AC 1 ton (1000W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({ac2: text})}
    value={this.state.ac2}/>

    <Text style={styles.text}>Waching Machine (500W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({wm1: text})}
    value={this.state.wm1}/>

    <Text style={styles.text}>Microwave (1000W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({microwave1: text})}
    value={this.state.microwave1}/>

    <Text style={styles.text}>Induction (2100W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({induction1: text})}
    value={this.state.induction1}/>

    <Text style={styles.text}>Water Pump (1000W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({waterpump1: text})}
    value={this.state.waterpump1}/>

    <Text style={styles.text}>DishWasher (1500W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({dishwash1: text})}
    value={this.state.dishwash1}/>

    <Text style={styles.text}>Geyser (2000W)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({geyser1: text})}
    value={this.state.geyser1}/>


    <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20, color: 'green'}}>Total Load is {totalwatt} VA.</Text>

    <Text style={{ fontSize: 10, width: '100%'}}></Text>
        <Text style={{width:'100%', color: '#ffffff', backgroundColor: 'green', fontSize: 20, fontWeight: 'bold'}}>Main Calculator</Text>
    <Text style={{ fontSize: 10, width: '100%'}}></Text>

    <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20, color: 'green'}}>You need a Solar Inverter more than {totalwatt} VA.</Text>


    <Text style={styles.text}>Voltage (V)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({voltage: text})}
    value={this.state.voltage} />

    <Text style={styles.text}>Backup time (Hrs)</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({backuptime: text})}
    value={this.state.backuptime} />


    <Text style={styles.text}>Inverter you purchased (watt)* </Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({inverter: text})}
    value={this.state.inverter} />

    <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20, color: 'green' }}>Inverter Current {invertercurrent} Amp.</Text>

    <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20, color: 'green' }}>Battery needed {batteryah} Ah.</Text>

    <Text style={styles.text}>Battery you purchased (Ah)* </Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({batteryahbuy: text})}
    value={this.state.batteryahbuy} />

    <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20, color: 'green' }}>Battery charging current {batterychargingcurrent} Amp.</Text>

    <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20, color: 'green' }}>Panel Power required (14V) {solarcurrent} W.</Text>

    <Text style={styles.text}>Panel Watt</Text>
    <TextInput style={styles.textinput} placeholderTextColor="#8899a6" placeholder="0"  keyboardType="number-pad"
    onChangeText={(text) => this.setState({panelwatt: text})}
    value={this.state.panelwatt}/>

    <Text style={{ width: '100%', fontWeight: 'bold', fontSize: 20, color: 'green' }}>Solar Panel needed {panel} piece to get required current.</Text>

<Text style={{ fontSize: 10, width: '100%'}}></Text>
<Text onPress={() => this.OpenWEB()} style={{width: '100%', backgroundColor: 'green', fontSize: 12, fontWeight: 'bold', textAlign: 'right', color: 'pink'}}>Coded By @ZishanAdThandar</Text>

      <StatusBar style="auto" />
      {
       (this.state.isVisible === true) ? Splash_Screen : null
     }
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
    paddingHorizontal: 2,
    paddingVertical: 2,
  },
  text: {
    width: '75%',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#8899a6'
  },
  textinput: {
    width: '25%',
    fontWeight: 'bold',
    fontSize: 20,
    color: '#8899a6'
  },
  texth1: {
    width: '100%',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green'
  },
  texth2: {
    width: '75%',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green'
  },
  texth3: {
    width: '25%',
    fontWeight: 'bold',
    fontSize: 20,
    color: 'green'
  },

 SplashScreen_RootView:
 {
     justifyContent: 'center',
     flex:1,
     margin: 0,
     position: 'absolute',
     width: '100%',
     height: '100%',
   },

 SplashScreen_ChildView:
 {
     justifyContent: 'center',
     alignItems: 'center',
     backgroundColor: '#ffffff',
     flex:1,
 },
});
