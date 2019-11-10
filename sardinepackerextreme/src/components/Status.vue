<template>
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
              <v-card-title
                color="#5FC9F4"
                style="text-color: #5FC9F4;"
                text-color="#5FC9F4; color: #5FC9F4;"
                class="center"
              >Status:</v-card-title>
              <v-card-text class="ma-4">{{ status }}</v-card-text>
              <br />
              <br />
            </v-card>
            <v-card
              fill-height
              justify
              class="my-1"
              style="text-color: #5FC9F4;"
              color="#FFFFFF"
              height="100%;"
            >
              <v-img
                max-width="35%"
                style="margin-left: auto; margin-right: auto;"
                src="../assets/qrcode (1).svg"
              ></v-img>
              <br />
              <br />
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>

    <v-footer color="#5FC9F4" app>
      <span>&copy; {{ eventName + " " + year }}</span>
    </v-footer>
  </v-app>
</template>

    <script>
export default {
  name: "Status",
  components: {},
  icons: {
    iconfont: "md"
  },
  data: () => ({
    drawer: null,
    alignment: "center",
    year: 2019,
    eventName: "HackUTD",
    appName: "Journey",
    dense: true,
    status:
      "You are currently awaiting for gate staff to begin their processing. Please be patient and a QR code will be assigned to you shorty."
  })
};
</script>