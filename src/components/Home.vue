<template>
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <div class="reveal">
      <div class="slides">
        <section>
          <h3>NIDC --></h3>
          <p>Use L/R to find your session, click it, then refresh</p>
          <p>Refreshing again will return you here</p>
        </section>
        <section v-for="(room, ix) in rooms" v-if="rooms">
          <h3>{{ room.title }}</h3>
          <center>
          <table>
            <thead>
              <tr>
                <th>Time</th>
                <th>Description</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(session, ix) in sessions[room.id]">
                <td>
                  {{ timeslots[session.time].startTime }}
                </td>
                <td>
                  <router-link :to="'/r/' + room.id + '/' + session.time">
                  {{ session.title }}
                  </router-link>
                  <span v-for="(speaker, ix) in getSpeakers(session)" class="speaker">
                    <strong>{{ speaker.title }}</strong>
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
          </center>
        </section>
      </div>
    </div>
</template>

<script>
import Reveal from 'reveal.js/js/reveal'
import axios from 'axios'

export default {
  name: 'page',
  data: () => {
    return {
      location: 'https://raw.githubusercontent.com/MarkXA/nidevconf/master/static/app/2019.json',
      agenda: null
    };
  },
  components: {
    // HelloWorld
  },
  mounted() {
    Reveal.initialize({
      autoSlide: 3000,
      loop: true
    });
    axios.get(this.location)
      .then(response => (this.agenda = response.data));
  },
  methods: {
    getSpeakers: function (session) {
      if (session && session.speakers) {
        return session.speakers.map(speaker => (this.speakers[speaker]));
      }
      return [];
    }
  },
  computed: {
    rooms() {
      var rooms = {};
      if (this.agenda) {
        this.agenda.rooms.forEach(room => {
          rooms[room.id] = room;
        });
      }
      return rooms;
    },
    sessions() {
      var sessions = {};
      if (this.agenda) {
        for (var roomId in this.rooms) {
          sessions[roomId] = this.agenda.sessions.filter(
            session => (session.room == roomId)
          ).sort((a, b) => (a.time - b.time));
        }
      }
      return sessions;
    },
    timeslots() {
      var timeslots = {};
      if (this.agenda) {
        this.agenda.timeslots.forEach(timeslot => {
          timeslots[timeslot.id] = timeslot;
        });
      }
      return timeslots;
    },
    speakers() {
      var speakers = {};
      if (this.agenda) {
        this.agenda.speakers.forEach(speaker => {
          speakers[speaker.id] = speaker;
        });
      }
      return speakers;
    }
  }
}
</script>

<style>
@import url('../../node_modules/reveal.js/css/reveal.css');
@import url('../../node_modules/reveal.js/css/theme/league.css');

    .reveal .parallel {
      font-size: 50%
    }
    .reveal .parallel td {
      width: 25%
    }
    .reveal .parallel td .talk-speaker {
      font-style: italic
    }
    .reveal .parallel td.previous {
      color: black;
      background-color: white
    }
    table {
      font-size: 0.4em;
    }
</style>
