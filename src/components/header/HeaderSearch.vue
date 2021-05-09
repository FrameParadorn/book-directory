<template>
  <v-col cols="6" class="d-flex align-center pa-0">
    <v-col cols="8" class="pa-0">
      <v-text-field
        hide-details
        solo
        dense
        prepend-inner-icon="mdi-magnify"
        label="Search the book"
      >
      </v-text-field>
    </v-col>
    <v-col cols="4">
      <v-select
        :items="[]"
        label="Solo field"
        hide-details
        dense
        solo
      ></v-select>
    </v-col>
    <v-col class="pa-0">
      <v-btn elevation="2" color="white">
        <v-icon> mdi-magnify </v-icon>
      </v-btn>
    </v-col>
  </v-col>
</template>
