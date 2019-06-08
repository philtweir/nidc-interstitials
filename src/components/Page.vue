<template>
  <div>
    <h1>{{ roomId }}</h1>
    <table>
      <thead>
        <tr>
          <th>Time</th>
          <th>Seen</th>
          <th>SIG.</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(session, ix) in sessions">
          <td>
            {{ timeslots[session.time].startTime }} -
            {{ timeslots[session.time].endTime }}
          </td>
          <td></td>
          <td></td>
          <td>
            <h3>{{ session.title }}</h3>
            <p>{{ session.description.substring(0, 300) }}<span v-if="session.description.length > 300">...</span></p>
            <div v-for="(speaker, ix) in getSpeakers(session)" class="speaker">
              <p><strong>{{ speaker.title }}</strong>: {{ speaker.description.substring(0, 300) }}<span v-if="session.description.length > 300">...</span></p>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
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
    roomId() {
      return this.$route.params.roomId;
    },
    sessions() {
      if (this.agenda) {
        return this.agenda.sessions.filter(
          session => (session.room == this.roomId)
        ).sort((a, b) => (a.time - b.time));
      } else {
        return [];
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
td {
  border-bottom: thin black solid;
  border-left: thin grey solid;
}
.speaker {
  font-style: italic;
}
</style>
