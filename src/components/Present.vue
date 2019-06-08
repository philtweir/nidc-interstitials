<template>
    <!-- <img src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
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
<!--
              <tr>
                {% for track in tracks.values() %}
                  {% if track.ix == session.room and previous %}
                    <td class="previous">
                      <div class="talk-title">{{ previous.title }}</div>
                      <div class="talk-speaker">{{ previous.speaker_names() }}</div>
                    </td>
                  {% elif track.ix in parallel %}
                    <td>
                      <div class="talk-title">{{ parallel[track.ix].title }}</div>
                      <div class="talk-speaker">{{ parallel[track.ix].speaker_names() }}</div>
                    </td>
                  {% else %}
                    <td></td>
                  {% endif %}
                {% endfor %}
              </tr>
              <tr><td colspan=4 style='height: 10px'></td></tr>
              {% if morning %}
              <tr style='margin-top: 10px'>
                <td class="previous">{{ tracks['lightning'].name }} Room
                  {% if live_lightning %}
                    (Live)
                  {% endif %}
                </td>
                <td>
                  {% if live_lightning %}
                    <div class="talk-title">{{ live_lightning.title }}</div>
                    <div class="talk-speaker">{{ live_lightning.speaker_names() }}</div>
                  {% else %}
                    Lightning Talks
                  {% endif %}
                </td>
                <td class="previous">
                  {% if next_lightning %}
                    {{ tracks['lightning'].name }} Room (Next)
                  {% endif %}
                </td>
                <td>
                  {% if next_lightning %}
                    <div class="talk-title">{{ next_lightning.title }}</div>
                    <div class="talk-speaker">{{ next_lightning.speaker_names() }}</div>
                  {% endif %}
                </td>
              </tr>
              <tr>
                <td class="previous">{{ tracks['project'].name }} Room</td>
                <td colspan="3">Demos, projects and showcases</td>
              </tr>
              <tr>
                <td class="previous">Atrium</td>
                <td colspan=3>Exhibitors &amp; Open Space proposals</p>
              {% else %}
              <tr>
                <td class="previous">{{ tracks['lightning'].name }}+<br/>{{ tracks['project'].name }} Rooms</td>
                <td colspan=3>Open Space<br/><span style='font-style: italic'>check the Marketplace in the Atrium to find/suggest sessions</span></td>
              </tr>
              {% endif %}
            </table>
          </section>
<!--
//          {% if session.feedbackQr or session.meetups %}
//          <section>
//            <div style="white-space: nowrap; vertical-align: top; height: 100%">
//            {% if session.feedbackQr %}
//            <div style="width: 40%; display: inline-block; padding-right: 5%; white-space: normal">
//              <h3>Feedback</h3>
//              <img src="{{ session.feedbackQr }}"/>
//              <p style="font-size: x-large">https://joind.in/event/northern-ireland-developer-conference-2018</p>
//            </div>
//            {% endif %}
//            {% if session.meetups %}
//            <div style="display: inline-block">
//            <h3>Meetups</h3>
//            <p>You may also<br/>be interested in</p>
//            <ul>
//            {% for meetup in session.meetups %}
//              <li>{{ meetups[meetup]['name'] }}</li>
//            {% endfor %}
//            </ul>
//            </div>
//            {% endif %}
//            </div>
//          </section>
//          {% endif %}
//          <section>
//            <div>
//            <a class="twitter-timeline" data-width="500" data-height="800" data-theme="dark" href="https://twitter.com/NIDevConf/likes?ref_src=twsrc%5Etfw">Tweets Liked by @NIDevConf</a> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script>
//            </div>
//            <div>
//            {% if previous_link %}
//            <a href="{{ previous_link }}">Prev</a>
//            {% endif %}
//            <a href="{{ now_link }}">Now</a>
//            <a href="/">Index</a>
//            {% if next_link %}
//            <a href="{{ next_link }}">Next</a>
//            {% endif %}
//            </div>
//          </section>
//          <section data-background="/media/giants-causeway.jpg.png" class="light">
//            <img style="background: none; border: none; max-width: 30%; box-shadow: none" src="/media/NIDevConf2018.png"/><br/>
//            <div style="vertical-align: middle; background: white; border-radius: 30px">
//            <div style="width: 30%; display: inline-block; height: 30%">
//              <img style="background: none; border: none; box-shadow: none" src="/media/allstate.png"/>
//            </div>
//            <div style="display: inline-block; width: 30%; height: 30%">
//              <img style="background: none; border: none; box-shadow: none" src="/media/bazaarvoice.svg"/>
//            </div>
//            </div>
//          </section>
-->
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
        console.log(s);
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
        console.log(this.session);
        console.log(this.session.time);
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
      console.log(rooms);
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
