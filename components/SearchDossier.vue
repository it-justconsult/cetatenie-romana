<template>
  <div class="relative">
    <img
      src="https://images.pexels.com/photos/3747463/pexels-photo-3747463.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
      class="absolute inset-0 object-cover w-full h-full"
      alt=""
    />
    <div class="relative bg-gray-900 bg-opacity-75">
      <div
        class="
          px-4
          py-16
          mx-auto
          sm:max-w-xl
          md:max-w-full
          lg:max-w-screen-xl
          md:px-24
          lg:px-8 lg:py-20
        "
      >
        <div class="flex flex-col items-center justify-between xl:flex-row">
          <div class="w-full max-w-full">
            <div class="bg-white rounded shadow-2xl p-7 sm:p-10">
              <div v-if="!showForm && !showSuccessMsg">
                <h3
                  class="
                    mb-4
                    text-4xl
                    font-bold
                    text-center sm:mb-6 sm:text-6xl
                    font-bold
                    text-cetro-green
                    font-tungsten
                  "
                >
                  Verifică stadiu dosar
                </h3>
                <p class="text-center  text-lg sm:text-xl lg:px-40 ">
                  Primește o înștiințare despre apariția ordinului Autorității
                  Naționale pentru Cetățenie (ANC) privind acordarea cetățeniei
                  române. Pentru aceasta este suficient să completezi
                  formularul.
                </p>

                <div
                  class="
                    relative
                    grid
                    gap-8
                    row-gap-5
                    mb-8
                    pt-10
                    md:row-gap-8
                    lg:grid-cols-2
                    sm:grid-cols-1
                  "
                >
                  <div>
                    <button
                      class="
                        inline-flex
                        items-center
                        justify-center
                        w-full
                        h-12
                        px-6
                        py-10
                        uppercase
                        font-medium
                        tracking-wide
                        text-white
                        transition
                        duration-200
                        rounded
                        shadow-md
                        bg-cetro-green
                        hover:bg-cetro-black
                        focus:shadow-outline focus:outline-none
                        font-montserrat
                      "
                      @click="displayForm('with_dossier')"
                    >
                      <fa icon="fa-solid fa-file-circle-check"  class="text-xl"/>
                      <p class="pl-1 font-bold" >Am număr de dosar</p>
                    </button>
                    <p class="px-2 py-4 text-cetro-text-gray font-montserrat">
                      *Dacă cunoști numărul dosarului de cetățenie română
                      (primit la momentul depunerii în România la sediul ANC),
                      selectează opțiunea „Am număr de dosar” și completează
                      formularul respectiv. Atunci, când ordinul va fi emis, vei
                      primi mesaj pe email.
                    </p>
                  </div>
                  <div>
                    <button
                      class="
                        inline-flex
                        items-center
                        justify-center
                        w-full
                        h-12
                        px-6
                        py-10
                        uppercase
                        font-medium
                        tracking-wide
                        text-white
                        transition
                        duration-200
                        rounded
                        shadow-md
                        bg-cetro-green
                        hover:bg-cetro-black
                        focus:shadow-outline focus:outline-none
                      "
                      @click="displayForm('without_dossier')"
                    >
                      <fa icon="fa-solid  fa-file-circle-xmark" class="text-xl" />
                      <p class="pl-1 font-bold">Nu am număr de dosar</p>
                    </button>
                    <p class="px-2 py-4 text-cetro-text-gray  font-montserrat">
                      *Dacă ai depus dosarul de cetățenie la unul dintre
                      Consulatele României și nu cunoști numărul dosarului,
                      selectează opțiunea „Nu am număr de dosar”, pentru a
                      expedia o scrisoare către Autoritatea Națională pentru
                      Cetățenie (ANC).
                    </p>
                  </div>
                </div>
              </div>
              <div v-if="showForm">
                <div class="px-5 lg:px-10 py-5">
                  <h3
                    class="
                      text-4xl
                      
                      text-center text-cetro-green
                      uppercase
                      font-tungsten
                    "
                    v-if="selectedForm == 'with_dossier'"
                  >
                    Primește notificare când apari în Ordinul ANC
                  </h3>
                  <h3
                    v-if="selectedForm == 'without_dossier'"
                    class="
                      text-2xl
                      font-bold
                      text-center text-cetro-green
                      uppercase
                    "
                  >
                    Expediază o scrisoare către ANC
                  </h3>
                  <div class="form">
                    <div class="input-container" v-if="selectedForm == 'with_dossier'">
                      <span class="font-bold text-cetro-text-gray"
                        >Numărul Dosar:</span
                      >
                      <input
                        class="
                          bg-cetro-gray
                          placeholder:text-slate-400
                          block
                          w-full
                          border border-cetro-green
                          rounded-md
                          py-4
                          pl-9
                          pr-3
                          shadow-sm
                          focus:outline-none
                          focus:border-cetro-green
                          focus:ring-cetro-green
                          focus:ring-1
                          sm:text-md
                          font-bold
                        "
                        placeholder="Ex. 12345/2022"
                        type="text"
                        name="dossier"
                        autocomplete="off"
                        v-model="form.dossier"
                      />
                    </div>
                    <div class="input-container">
                      <span class="font-bold text-cetro-text-gray"
                        >Nume / Prenume:</span
                      >
                      <input
                        autocomplete="off"
                        class="
                          bg-cetro-gray
                          placeholder:text-slate-400
                          block
                          w-full
                          border border-cetro-green
                          rounded-md
                          py-4
                          pl-9
                          pr-3
                          shadow-sm
                          focus:outline-none
                          focus:border-cetro-green
                          focus:ring-cetro-green
                          focus:ring-1
                          sm:text-md
                          font-bold
                        "
                        placeholder="Ex. Ciobanu Cristina"
                        type="text"
                        name="name"
                        v-model="form.name"
                      />
                    </div>

                    <div class="input-container">
                      <span class="font-bold text-cetro-text-gray"
                        >Număr de telefon:</span
                      >
                      <input
                        autocomplete="off"
                        class="
                          bg-cetro-gray
                          placeholder:text-slate-400
                          block
                          w-full
                          border border-cetro-green
                          rounded-md
                          py-4
                          pl-9
                          pr-3
                          shadow-sm
                          focus:outline-none
                          focus:border-cetro-green
                          focus:ring-cetro-green
                          focus:ring-1
                          sm:text-md
                          font-bold
                        "
                        placeholder="Ex. 068112233"
                        type="text"
                        name="phone"
                        v-model="form.phone"
                      />
                    </div>

                    <div class="input-container">
                      <span class="font-bold text-cetro-text-gray"
                        >Adresa de Email:</span
                      >
                      <input
                        autocomplete="off"
                        class="
                          bg-cetro-gray
                          placeholder:text-slate-400
                          block
                          w-full
                          border border-cetro-green
                          rounded-md
                          py-4
                          pl-9
                          pr-3
                          shadow-sm
                          focus:outline-none
                          focus:border-cetro-green
                          focus:ring-cetro-green
                          focus:ring-1
                          sm:text-md
                          font-bold
                        "
                        placeholder="Ex. cristiaceban@gmail.com"
                        type="email"
                        name="email"
                        v-model="form.email"
                      />
                    </div>

                    <p class="py-2">
                      *Datele cu caracter personal transmise prin intermediul
                      acestui formular sunt folosite și protejate în
                      conformitate cu legislația în vigoare. 
                    </p>

                    <div class="input-container">
                      <button
                        class="
                          mt-10
                          inline-flex
                          items-center
                          justify-center
                          w-full
                          px-6
                          py-6
                          uppercase
                          font-medium
                          tracking-wide
                          text-white
                          transition
                          duration-200
                          rounded
                          shadow-md
                          bg-cetro-green
                          hover:bg-cetro-black
                          focus:shadow-outline focus:outline-none
                        "
                        @click="sendForm"
                      >
                        Trimite
                      </button>
                    </div>
                    <div class="input-container">
                      <button
                        @click="displayForm()"
                        class="
                          inline-flex
                          items-center
                          justify-center
                          w-full
                          px-6
                          py-3
                          uppercase
                          font-medium
                          tracking-wide
                          text-cetro-text-gray
                          transition
                          duration-200
                          rounded
                          shadow-md
                          bg-white
                          hover:bg-cetro-gray
                          focus:shadow-outline focus:outline-none
                        "
                      >
                        Anulează
                      </button>
                    </div>
                  </div>
                </div>
                <div></div>
              </div>
              <div
                class="flex justify-center"
                v-if="showSuccessMsg && selectedForm === 'with_dossier'"
              >
                <div class="lg:w-6/12 xs:w-full justify-center">
                  <div class="flex justify-center py-4">
                    <img
                      class="object-none object-center animate-pulse"
                      src="~/assets/img/sent-icon.png"
                    />
                  </div>
                  <p
                    class="
                      text-2xl
                      font-bold
                      uppercase
                      text-center text-cetro-green
                    "
                  >
                    Datele completate au fost expediate și urmează să primești
                    notificare pe email atunci când va publicat ordinul tău!
                  </p>

                  <button
                    class="
                      mt-10
                      inline-flex
                      items-center
                      justify-center
                      w-full
                      px-6
                      py-4
                      uppercase
                      font-medium
                      tracking-wide
                      text-white
                      transition
                      duration-200
                      rounded
                      shadow-md
                      bg-cetro-green
                      hover:bg-cetro-black
                      focus:shadow-outline focus:outline-none
                    "
                    @click="confirm()"
                  >
                    OK
                  </button>
                </div>
              </div>
              <div
                class="flex justify-center"
                v-if="showSuccessMsg && selectedForm === 'without_dossier'"
              >
                <div class="lg:w-6/12 xs:w-full justify-center">
                  <div class="flex justify-center py-4">
                    <img
                      class="object-none object-center animate-pulse"
                      src="~/assets/img/sent-icon.png"
                    />
                  </div>
                  <p
                    class="
                      text-2xl
                      font-bold
                      uppercase
                      text-center text-cetro-green
                    "
                  >
                    Datele completate au fost expediate, în scurt timp vei fi
                    contactat de către un specialist în acte românești!
                  </p>

                  <button
                    class="
                      mt-10
                      inline-flex
                      items-center
                      justify-center
                      w-full
                      px-6
                      py-4
                      uppercase
                      font-medium
                      tracking-wide
                      text-white
                      transition
                      duration-200
                      rounded
                      shadow-md
                      bg-cetro-green
                      hover:bg-cetro-black
                      focus:shadow-outline focus:outline-none
                    "
                    @click="confirm()"
                  >
                    OK
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import hasContentProps from '~/mixins/hasContentProps'

export default {
  name: 'SearchDossier',
  mixins: [hasContentProps],
  data: function () {
    return {
      showForm: false,
      selectedForm: null,
      showSuccessMsg: false,
      successMsg: {
        with_dossier: '',
        without_dossier: '',
      },
      form: {
        name: '',
        phone: '',
        dossier: '',
        email: '',
      },
    }
  },
  methods: {
    confirm: function () {
      this.selectedForm = ''
      this.showForm = false
      this.showSuccessMsg = false
    },
    displayForm: function (code) {
      this.selectedForm = code
      this.showForm = !this.showForm
    },
    sendForm: function () {
      /**
       * Send Code Here
       */

      this.showForm = false
      this.showSuccessMsg = true
      this.form = {
        name: '',
        phone: '',
        dossier: '',
        email: '',
      }
    },
  },
}
</script>
<style scoped>
.input-container {
  padding-top: 15px;
}
</style>
