<template>
  <div>
    <div class="bg-cetro-green py-20 mx-auto flex justify-center">
      <h2
        class="uppercase font-sans text-3xl font-bold leading-none tracking-tight text-white sm:text-4xl md:mx-auto"
      >
        {{ contactsPageTitle }}
      </h2>
    </div>
    <div
      class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
    >
      <div
        class="grid gap-8 lg:grid-cols-4 sm:max-w-sm sm:mx-auto lg:max-w-full"
      >
        <div>
          <div id="map-wrap" style="height: 100vh; width: 100vh">
            <client-only>
              <l-map :zoom=16 :center="[47.02166713602411, 28.853158183196076]">
                <l-tile-layer url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"></l-tile-layer>
                <l-marker :lat-lng="[55.9464418,8.1277591]"></l-marker>
              </l-map>
            </client-only>
          </div>
        </div>

        <script>
          import {LMap, LTileLayer, LMarker} from 'vue2-leaflet';

          export default {
            components: {
              LMap,
              LTileLayer,
              LMarker
            },
            data () {
              return {
                url: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
                attribution:
                  '&copy; <a target="_blank" href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                zoom: 15,
                center: [51.505, -0.159],
                markerLatLng: [51.504, -0.159]
              };
            }
          }
        </script>

      </div>
    </div>
  </div>
</template>

<script>
import uploadContent from '~/mixins/uploadContent'

export default {
  name: 'ContactsPage',
  mixins: [uploadContent],
  computed: {
    contactsPageTitle() {
      return (this.content.contactsPage || {}).title
    }
  },
}
</script>

<style scoped></style>
