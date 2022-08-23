import React from "react"
import {createDrawerNavigator} from '@react-navigation/drawer';
import SideDrawer from '../custom/SideDrawer';
// import Home from "./home"
// import ShipmentStack from "./Shipment";
// import PaymentStack from "./Payment";
// import ProfileStack from "./Profile";
// import SettingStack from "./Settings";
// import SupportStack from "./Support";
// import AddressBookStack from './AddressBook';
const Drawer = createDrawerNavigator();


const Dashboard = () => {
  return (
    <Drawer.Navigator
      initialRouteName="Home"
      // drawerContent={(props) => <SideDrawer {...props} />}
    >
      {/* <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Shipment" component={ShipmentStack} />
      <Drawer.Screen name="Payment" component={PaymentStack} />
      <Drawer.Screen name="Profile" component={ProfileStack} />
      <Drawer.Screen name="AddressBook" component={AddressBookStack} />
      <Drawer.Screen name="Settings" component={SettingStack} />
      <Drawer.Screen name="Support" component={SupportStack} /> */}
    </Drawer.Navigator>
  );
}

export default Dashboard;