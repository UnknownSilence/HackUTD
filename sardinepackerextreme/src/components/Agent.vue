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
                class="my-1"
                style="text-color: #5FC9F4;"
                color="#FFFFFF"
                height="100%;"
              >
                <v-card class="ma-5">
                  <v-card-text>Distribute Group Assignments</v-card-text>
                  <v-btn @click="distribute" outlined xl class="ma-5">Send</v-btn>
                </v-card>

                <v-card-title
                  color="#5FC9F4"
                  style="text-color: #5FC9F4;"
                  text-color="#5FC9F4; color: #5FC9F4;"
                  class="center"
                >Plane Boarding</v-card-title>
                <Plane
                  style="display: block; margin-left: auto; margin-right: auto"
                  class="planeView"
                ></Plane>
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



<script>
import Plane from "./Plane";
import { translate } from "../plugins/animate";
export default {
  name: "Agent",
  components: {
    Plane
  },
  methods: {
    go() {
      translate(this.$refs.square);
    },
    distribute() {
      return false;
    }
  },
  icons: {
    iconfont: "md"
  },
  data: () => ({
    drawer: null,
    alignment: "center",
    year: 2019,
    eventName: "HackUTD",
    appName: "Journey | Agent Console",
    dense: true
  })
};
</script>