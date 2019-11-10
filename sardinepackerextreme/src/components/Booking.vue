<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" app>
        <v-list dense>
          <v-list-item @click="$router.push('/')">
            <v-list-item-action>
              <v-icon>mdi-shield-airplane-outline</v-icon>
            </v-list-item-action>
            <v-list-item-content>
              <v-list-item-title>Home</v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar app color="#5FC9F4" append="dark">
        <v-app-bar-nav-icon @click.stop="drawer = !drawer"></v-app-bar-nav-icon>
        <v-toolbar-title>{{ appName }}</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-icon right>mdi-shield-airplane-outline</v-icon>
      </v-app-bar>
      <v-content>
        <v-container fill-height grid-list-md text-xs-center>
          <v-layout row wrap>
            <v-flex fill-height height="100%;">
              <v-card
                fill-height
                justify
                class="my-5"
                style="text-color: #5FC9F4; overflow-x: hidden;"
                color="#FFFFFF"
                height="100%;"
              >
                <v-card-title
                  color="#5FC9F4"
                  style="text-color: #5FC9F4;"
                  text-color="#5FC9F4; color: #5FC9F4;"
                  class="center"
                >Booking</v-card-title>
                <form class="ma-5">
                  <v-text-field
                    v-model="name"
                    :rules="[() => !!name || 'This field is required']"
                    label="Name"
                    required
                  ></v-text-field>
                  <v-text-field
                    :rules="[() => !!email || 'This field is required']"
                    v-model="email"
                    required
                    label="E-mail"
                  ></v-text-field>
                  <v-text-field
                    :rules="[() => !!phone || 'This field is required']"
                    v-model="phone"
                    label="Phone Number"
                    required
                    counter="10"
                  ></v-text-field>
                  <v-select
                    :rules="[() => !!origin || 'This field is required']"
                    class="my-2"
                    placeholder="Origin"
                    v-model="origin"
                    :items="airports"
                    menu-props="auto"
                    hide-details
                    label="Select Origin"
                    single-line
                  ></v-select>
                  <v-select
                    :rules="[() => !!targetDestination || 'This field is required']"
                    class="my-2"
                    placeholder="Destination"
                    v-model="targetDestination"
                    :items="airports"
                    menu-props="auto"
                    hide-details
                    label="Select Destination"
                    single-line
                  ></v-select>
                  <v-select
                    :rules="[() => !!carryOnNumber || 'This field is required']"
                    class="my-2"
                    v-model="carryOnNumber"
                    :items="carryOnNums"
                    menu-props="auto"
                    hide-details
                    label="Number of Carry-ons"
                    single-line
                  ></v-select>
                  <v-select
                    :rules="[() => !!passengerTierType || 'This field is required']"
                    class="my-2"
                    v-model="passengerTierType"
                    :items="passengerType"
                    menu-props="auto"
                    label="Passenger Type"
                    single-line
                  ></v-select>
                  <v-select
                    class="my-2"
                    v-model="prefLanguage"
                    :items="languages"
                    menu-props="auto"
                    hide-details
                    label="Language"
                    single-line
                  ></v-select>
                  <v-select
                    :rules="[() => !!passengerDisabilities || 'This field is required']"
                    class="my-2"
                    v-model="passengerDisabilities"
                    :items="disabilities"
                    menu-props="auto"
                    hide-details
                    label="Disability"
                    single-line
                  ></v-select>
                  <v-card-title
                    color="#5FC9F4"
                    style="text-color: #5FC9F4;"
                    text-color="#5FC9F4; color: #5FC9F4;"
                    class="center"
                  >Select Preferred Seating</v-card-title>
                  <Plane2
                    v-if="passengerTierType != 'Economy'"
                    style="display: block; margin-left: auto; margin-right: auto;"
                    class="planeView"
                  ></Plane2>
                  <v-select
                    v-else
                    class="my-2"
                    v-model="prefSeatType"
                    :items="seatTypes"
                    menu-props="auto"
                    hide-details
                    label="Seat Type"
                    single-line
                  ></v-select>
                  <v-divider></v-divider>
                  <v-menu :close-on-content-click="false" transition="scale-transition">
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="startDate"
                        label="Departure Date"
                        hint="MM/DD/YYYY format"
                        persistent-hint
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="startDate" no-title></v-date-picker>
                  </v-menu>
                  <v-menu :close-on-content-click="false" transition="scale-transition">
                    <template v-slot:activator="{ on }">
                      <v-text-field
                        v-model="returnDate"
                        label="Return Date"
                        hint="MM/DD/YYYY format"
                        persistent-hint
                        readonly
                        v-on="on"
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="returnDate" no-title></v-date-picker>
                  </v-menu>

                  <v-btn @click="submit" xl color="#5FC9F4" class="my-3 mx-2">submit</v-btn>
                  <br />
                  <br />
                </form>
                <v-card
                  fill-height
                  justify
                  class="my-1"
                  style="text-color: #5FC9F4;"
                  color="#FFFFFF"
                  height="100%;"
                >
                  <v-btn
                    @click="$router.push('/RawAmadeus')"
                    append="icon"
                    class="ma-1 pa-5"
                    :style="{left: '50%', transform:'translateX(-50%)'}"
                    color="#5FC9F4"
                    min-width="25%"
                    outlined
                  >View Amadeus Raw Data</v-btn>
                  <br />
                </v-card>
              </v-card>
            </v-flex>
          </v-layout>
        </v-container>
      </v-content>

      <v-footer color="#5FC9F4" app>
        <span>&copy; {{ eventName + " " + year }}</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script src="https://cdn.jsdelivr.net/npm/axios@0.12.0/dist/axios.min.js">
</script>
<script>
var airportList = require("../assets/airports.json");
var dropdownAirports = [];

for (var i = 0; i < airportList.length; i++) {
  var obj = airportList[i];

  dropdownAirports.push(obj.name);
}

import Plane2 from "./Plane2";
export default {
  name: "Booking",
  components: { Plane2 },
  icons: {
    iconfont: "md"
  },

  methods: {
    submit() {
      axios
        .post("http://2529c5c7.ngrok.io/dummyJson", {
          params: {
            name: this.name,
            email: this.email,
            phone: this.phone,
            bagNum: this.carryOnNumber,
            tier: this.passengerTierType,
            disability: this.passengerDisabilities,
            language: this.prefLanguage,
            startDate: this.startDate,
            returnDate: this.returnDate
          }
        })
        .then(response => (this.responseData = response.data))
        .catch(error => {
          alert(error);
        });
    }
  },

  data: () => ({
    drawer: null,
    alignment: "center",
    year: 2019,
    eventName: "HackUTD",
    appName: "Journey",
    dense: true,
    airports: dropdownAirports,
    passengerType: ["Economy", "Preferred/Pre-Boarding", "First Class"],
    disabilities: ["None", "Visual", "Auditory", "Wheelchair"],
    languages: ["English", "Espanol"],
    seatTypes: ["Aisle", "Middle", "Row"],
    carryOnNums: [0, 1, 2],
    ajaxRequest: false,
    prefSeatType: "",
    email: "",
    phone: "",
    origin: "",
    targetDestination: "",
    carryOnNumber: null,
    passengerTierType: "",
    passengerDisabilities: "",
    prefLanguage: "",
    name: "",
    startDate: "",
    returnDate: ""
  })
};
</script>