<template>
  <div class="reveal">
    <div class="slides">
      <section v-if="!(session && room && timeslot)" data-transition="fade"></section>
        <section class="light" v-if="session && room && timeslot">
          <h2>{{ session.title }}</h2>
          <h3><span v-for="(speaker, ix) in getSpeakers(session)">{{ speaker.title }}</span></h3>
          <p><span v-for="(speaker, ix) in getSpeakers(session)">{{ speaker.twitter }}</span></p>
        </section>
      <section v-if="session && room && timeslot" data-transition="fade">
        <h3>You are in <span class="room">{{ room.title }}</span></h3>
        <h4>In other rooms from <span class="room">{{ timeslot.startTime }}</span></h4>
          <table class="parallel">
            <tr>
                <td v-for="(track, i) in tracks">{{ getRoom(track).title }}</td>
            </tr>
            <tr>
                <td v-for="(track, i) in tracks">{{ track.title }}</td>
            </tr>
        </table>
      </section>
    </div>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import Reveal from 'reveal.js/js/reveal'
import axios from 'axios'

export default {
  name: 'app',
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
    },
    getRoom: function (session) {
      if (session && session.room && session.room in this.rooms) {
        return this.rooms[session.room];
      }
    }
  },
  computed: {
    room() {
      if (this.roomId in this.rooms) {
        return this.rooms[this.roomId];
      }
    },
    roomId() {
      return this.$route.params.roomId;
    },
    timeId() {
      return this.$route.params.timeId;
    },
    session() {
      if (this.sessions && this.sessions.length == 1) {
        return this.sessions[0];
      }
      return undefined;
    },
    tracks() {
      if (this.agenda) {
        var s = this.agenda.sessions.filter(
          session => (session.time == this.timeId)
        ).sort((a, b) => (a.time - b.time));
        return s;
      } else {
        return [];
      }
    },
    session() {
      if (this.tracks) {
        var s = this.tracks.filter(
          session => (session.room == this.roomId)
        );
        if (s && s.length == 1) {
          return s[0];
        }
      }
    },
    timeslot() {
      if (this.session && this.session.time in this.timeslots) {
        return this.timeslots[this.session.time];
      }
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
    rooms() {
      var rooms = {};
      if (this.agenda) {
        this.agenda.rooms.forEach(room => {
          rooms[room.id] = room;
        });
      }
      return rooms;
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
</style>
