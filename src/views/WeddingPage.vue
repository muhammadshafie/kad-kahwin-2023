<template lang="">
    <div
      style="max-width: 428px"
      class="min-w-screen min-h-screen flex items-center justify-center bg-white text-gray-800 shadow-xl h-full"
    >
      <!-- <div
        class="bg-white text-gray-800 rounded-xl shadow-lg overflow-hidden relative flex"
        style="width: 428px; height: 100vh"
      > -->
  
      <!-- ============ First Section ============ -->
      <div class="bg-white h-full w-full px-5 pt-5">
        <div class="mb-8">
          <div
            class="h-[95vh] bg text-dark cursor-pointer block rounded-lg bg-gray-100 flex justify-center items-center flex-col text-center p-4 transform transition-all duration-300 scale-100 hover:scale-[.98]"
            style="
              background-image: url('https://shafieramli.com/kad-kahwin/images/background/bg-mint-green-1.jpg');
              background-position: center;
              background-size: cover;
            "
          >
            <h4 class="font-bold">WALIMATUL URUS</h4>
            <div class="py-5">
              <h1 class="text-5xl font-bold capitalize">{{webData.first_name}}</h1>
              <h1 class="text-3xl font-bold">&</h1>
              <h1 class="text-5xl font-bold capitalize">{{webData.second_name}}</h1>
            </div>
            <div class="pb-3">
              <h3 class="text-xl italic">{{fullDate}}</h3>
              <h3 class="py-1 italic">{{ hijriDate}}</h3>

            </div>
          </div>
        </div>
  
        <!-- ============ Walimatul Urus Section ============ -->
        <div class="mb-8">
          <div
            class="cursor-pointer block rounded-lg bg-[#c9e4da] flex justify-center px-5 py-24 transform transition-all duration-300 scale-100 hover:scale-[.98]"
          >
            <div class="absolute top-0 -mt-3">
              <div
                class="rounded-full bg-[#348784] align-center text-white text-xs py-1 px-2 leading-none"
              >
                <span class="text-center">Undangan</span>
              </div>
            </div>
            <div class="text-black text-center" >
              <h1
                class="text-xl font-bold pb-8"
                style="font-family: 'Noto Naskh Arabic', serif; font-size: 40px"
              >
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
              </h1>
              <p>Dengan penuh kesyukuran, kami</p>
              <div class="py-5">
                <h2 class="text-black uppercase text-2xl font-bold leading-tight py-2">
                  {{webData.inviting_name_1}}
                </h2>
                <p>&amp;</p>
                <h2 class="text-black uppercase text-2xl font-bold leading-tight py-2">
                  {{webData.inviting_name_2}}
                </h2>
              </div>
              <p>
                Dengan Segala Hormatnya Mempersilakan Ybhg. Tan Sri/ Puan Sri/ Dato/ Datin/ Tuan/ Puan
                ke Majlis Perkahwinan Anakanda Kami
              </p>
              <div class="py-5">
                <div class="py-3 bg-white rounded-lg shadow-lg text-dark">
                  <h4 class="text-black uppercase font-bold leading-tight">
                    {{webData.bride_name_1}}
                  </h4>
                  <p class="text-black uppercase font-bold">&amp;</p>
                  <h4 class="text-black uppercase font-bold leading-tight">
                    {{webData.bride_name_2}}
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ Detail Section ============ -->
        <div class="mb-8">
          <div
            class="cursor-pointer block rounded-lg bg-[#c9e4da] flex justify-center px-5 py-24 transform transition-all duration-300 scale-100 hover:scale-[.98]"
          >
            <div class="absolute top-0 -mt-3">
              <div
                class="rounded-full bg-[#348784] align-center text-white text-xs py-1 px-2 leading-none"
              >
                <span class="text-center">Lokasi, Tarik, Masa</span>
              </div>
            </div>
            <div class="text-black text-center">
              <p>Tempat</p>
              <p>{{weddingData.location}}</p>
              <p>Tarikh</p>
              <p>{{fullDate}}</p>
              <p>Masa</p>
              <p>{{weddingData.startTime}} - {{weddingData.endTime}}</p>
            </div>
          </div>
        </div>
  
        <!-- ============ Countdown Section ============ -->
        <div class="mb-8">
          <div
            class="cursor-pointer block rounded-lg bg-[#c9e4da] flex justify-center p-5 transform transition-all duration-300 scale-100 hover:scale-[.98]"
          >
            <div class="absolute top-0 -mt-3">
              <div
                class="rounded-full bg-[#348784] align-center text-white text-xs py-1 px-2 leading-none"
              >
                <span class="text-center">Pengiraan Detik Majlis Perkahwinan</span>
              </div>
            </div>
            <Countdown deadline="2024-12-01 00:00:00" mainColor="#000" secondFlipColor="#000" countdownSize="3rem" labelSize="1.5rem" :flipAnimation="false" :labels="{days: 'Hari',hours: 'Jam',minutes: 'Minit',seconds: 'Saat'}"/>
          </div>
        </div>
  
        <!-- ============ Aturcara Section ============ -->
        <div class="mb-8">
          <div
            class="cursor-pointer block rounded-lg bg-[#c9e4da] flex justify-center p-5 transform transition-all duration-300 scale-100 hover:scale-[.98]"
          >
            <div class="absolute top-0 -mt-3">
              <div
                class="rounded-full bg-[#348784] align-center text-white text-xs py-1 px-2 leading-none"
              >
                <span class="text-center">Aturcara Majlis</span>
              </div>
            </div>
            <div class="text-black">
                <!-- <p>11:00 AM	MAJLIS BERMULA</p>
                <p>12:30 PM	KETIBAAN PENGANTIN</p>
                <p>5:00 PM	MAJLIS BERAKHIR</p> -->
                <!-- Vertical Timeline #1 -->
                <div class="">
                    <!-- Item #1 -->
                    <div class="relative pl-8 sm:pl-32 py-2 group">
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#348784] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#348784] after:border-4 after:box-content after:border-[#348784] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">11:00 am</time>
                            <div class="text-md font-bold text-slate-900 translate-y-1">MAJLIS BERMULA</div>
                        </div>
                    </div>
  
                    <!-- Item #2 -->
                    <div class="relative pl-8 sm:pl-32 py-2 group">
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#348784] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#348784] after:border-4 after:box-content after:border-[#348784] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">12:00 pm</time>
                            <div class="text-md font-bold text-slate-900 translate-y-1">KETIBAAN PENGANTIN</div>
                        </div>
                    </div>
  
                    <!-- Item #3 -->
                    <div class="relative pl-8 sm:pl-32 py-2 group">
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#348784] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#348784] after:border-4 after:box-content after:border-[#348784] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">03:00 pm</time>
                            <div class="text-md font-bold text-slate-900 translate-y-1">MAJLIS BERAKHIR</div>
                        </div>
                    </div>
  
                    <!-- Item #4 -->
                    <div class="relative pl-8 sm:pl-32 py-2 group">
                        <div class="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px before:bg-[#348784] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:bg-[#348784] after:border-4 after:box-content after:border-[#348784] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
                            <time class="sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 text-emerald-600 bg-emerald-100 rounded-full">05:00 pm</time>
                            <div class="text-md font-bold text-slate-900 translate-y-1">MAJLIS BERAKHIR</div>
                        </div>
                    </div>
                  </div>
                <!-- End: Vertical Timeline #1 -->
            </div>
          </div>
        </div>
        
  
        <!-- =========== Sticky Navigation =========== -->
        <div
          class="sticky bottom-2 p-5 px-6 m-2 flex items-center justify-between backdrop-blur-sm bg-white/20 shadow-3xl text-gray-400 rounded-2xl cursor-pointer"
        >
          <div @click="openMapOption"  class="flex flex-col items-center transition ease-in duration-200 text-[#348784] hover:text-[#c9e4da]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              data-slot="icon"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
          </div>
          <div @click="addToGoogleCalendar" class="flex flex-col items-center transition ease-in duration-200 text-[#348784] hover:text-[#c9e4da]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              data-slot="icon"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z"
              />
            </svg>
          </div>
          <div class="flex flex-col items-center text-[#348784] hover:text-[#c9e4da]">
            <div
              class="absolute bottom-5 shadow-2xl text-center flex items-center justify-center rounded-full border-4 text-3xl border-gray-50 hover:border-[#348784] hover:bg-[#c9e4da] bg-[#348784] w-20 h-20 p-2 text-white transition ease-in duration-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                data-slot="icon"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z"
                />
              </svg>
              <!-- <span>RSVP</span> -->
            </div>
          </div>
          <div @click="addBookmark" class="flex flex-col items-center transition ease-in duration-200 text-[#348784] hover:text-[#c9e4da]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              stroke="currentColor"
              data-slot="icon"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
              ></path>
            </svg>
          </div>
          <div @click="openContactOption" class="flex flex-col items-center transition ease-in duration-200 text-[#348784] hover:text-[#c9e4da]">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#fff"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              data-slot="icon"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
              />
            </svg>
          </div>
        </div>
      </div>
      <!-- </div> -->

      <!-- ======================== Dialog Map ======================== -->
      <TransitionRoot appear :show="isOpen" as="template">
        <Dialog :initialFocus="dialogRef" as="div" @close="closeModal" class="relative z-10 ">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/25" />
          </TransitionChild>
    
          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-2xl transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all backdrop-blur-lg bg-white/20"
                >
                    <div class="flex items-start justify-between">
                      <DialogTitle
                        as="h3"
                        class="text-lg font-medium bold leading-6 text-gray-900 flex"
                      >Navigation App 
                      <MapPinIcon class="h-6 w-6 ml-1 text-gray-900" />

                      </DialogTitle>
                      <XMarkIcon 
                        @click="closeModal"
                        class="cursor-pointer h-8 w-8 p-1.5 ml-auto text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      />
                      <button ref="dialogRef"  /> 
                    </div>
                    <div class="mt-2 flex gap-4">
                      <a  :href="`https://maps.google.com/maps?daddr=${weddingData.coordinate}&amp;ll=`" target="_blank">
                        <img class="h-16 w-16 rounded-2xl" src="@/assets/google-maps-logo.svg">
                      </a>
                      <a :href="`https://www.waze.com/ul?ll=${weddingData.coordinate}&navigate=yes&zoom=17`" target="_blank">
                        <img class="h-16 w-16 rounded-2xl" src="@/assets/waze-logo.png">
                      </a>
                      <a :href="`maps://maps.google.com/maps?daddr=${weddingData.coordinate}&amp;ll=`">
                        <img class="h-16 w-16 rounded-2xl" src="@/assets/apple-map-logo.svg">
                      </a>
                    </div>
                
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
      

      <!-- ======================== Dialog Map ======================== -->
      <TransitionRoot appear :show="isOpenContact" as="template">
        <Dialog :initialFocus="dialogRef" as="div" @close="closeModalContact" class="relative z-10 ">
          <TransitionChild
            as="template"
            enter="duration-300 ease-out"
            enter-from="opacity-0"
            enter-to="opacity-100"
            leave="duration-200 ease-in"
            leave-from="opacity-100"
            leave-to="opacity-0"
          >
            <div class="fixed inset-0 bg-black/25" />
          </TransitionChild>
    
          <div class="fixed inset-0 overflow-y-auto">
            <div
              class="flex min-h-full items-center justify-center p-4 text-center"
            >
              <TransitionChild
                as="template"
                enter="duration-300 ease-out"
                enter-from="opacity-0 scale-95"
                enter-to="opacity-100 scale-100"
                leave="duration-200 ease-in"
                leave-from="opacity-100 scale-100"
                leave-to="opacity-0 scale-95"
              >
                <DialogPanel
                  class="w-full max-w-2xl transform overflow-hidden rounded-2xl p-6 text-left align-middle shadow-xl transition-all backdrop-blur-lg bg-white/20"
                >
                    <div class="flex items-start justify-between">
                      <DialogTitle
                        as="h3"
                        class="text-lg font-medium bold leading-6 text-gray-900 flex"
                      >Navigation App 
                      <MapPinIcon class="h-6 w-6 ml-1 text-gray-900" />

                      </DialogTitle>
                      <XMarkIcon 
                        @click="closeModalContact"
                        class="cursor-pointer h-8 w-8 p-1.5 ml-auto text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      />
                      <button ref="dialogRef"  /> 
                    </div>
                    <div class="mt-2 flex row gap-4">
                      <a class="col" :href="`tel:${webData.contact_1}`" target="_blank">
                        <div class="flex gap-1">
                          <PhoneIcon class="h-6 w-6 text-gray-900" />
                          <h3 class="ml-2 text-gray-900 text-balance">{{webData.contactName_1}}</h3>
                        </div>
                      </a>
                      
                      <a class="col" :href="`tel:${webData.contact_2}`" target="_blank">
                        <div class="flex gap-1">
                          <PhoneIcon class="h-6 w-6 text-gray-900" />
                          <h3 class="ml-2 text-gray-900 text-balance">{{webData.contactName_2}}</h3>
                        </div>
                      </a>
                    </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>

    </div>
  </template>
<script>
import { Countdown } from 'vue3-flip-countdown'
import { useStore } from '@/stores/store';
import { storeToRefs } from 'pinia';
import { onMounted, computed, ref, nextTick } from 'vue';
import { useRoute } from 'vue-router';
import { convertToHijri } from "@/utils/convertToHijri"
import { convertDateToMalay } from "@/utils/convertDateToMalay"
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue';
import { XMarkIcon,ArrowRightCircleIcon,MapPinIcon,PhoneIcon } from '@heroicons/vue/24/outline';

export default {
    name: "WeddingPage",
    components:{
        Countdown,
        TransitionRoot,
        TransitionChild,
        Dialog,
        DialogPanel,
        DialogTitle,
        XMarkIcon,
        ArrowRightCircleIcon,
        MapPinIcon,
        PhoneIcon
    },
    setup() {
    const store = useStore();
    const { webData, calendarData, weddingData } = storeToRefs(store);
    const route = useRoute()
    const isOpen = ref(false)
    const dialogRef = ref(null)
    const isOpenContact = ref(false)


    const closeModal = () => {
      isOpen.value = false;
    }

    const openMapOption = () => {
      // selectedCompany.value = company;
      isOpen.value = true;
    }

    const closeModalContact = () => {
      isOpenContact.value = false;
    }

    const openContactOption = () => {
      // selectedCompany.value = company;
      isOpenContact.value = true;
    }


    onMounted(async() => {
      await store.getWebData(route.params.name);
      await store.getCalendarData(route.params.name);
      await store.getWeddingData(route.params.name);
    })

    // Convert API date data once webData is loaded
    // Convert to full eg: Ahad, 1 Disember 2024
    const fullDate = computed(() => {
      if (webData.value.date) {
        return convertDateToMalay(webData.value.date);
      }
      return '';
    });

    // Convert API date data to hijri date once webData is loaded
    // Convert to hijri date eg: 28 Jamadilawal 1446
    const hijriDate = computed(()=> {
      if (webData.value.date) {
        return convertToHijri(webData.value.date);
      }
      return '';
    })

    const formatDateTime = (date, time, timeZone) => {

      // Create a Date object and convert to ISO 8601 format
      const dateTime = new Date(`${date}T${time}`);
      // Format as `yyyyMMddTHHmmssZ` (UTC timezone)
      return dateTime.toISOString().replace(/-|:|\.\d\d\d/g, "");
    };



     const gotoMap = computed(() => {
      if /* if we're on iOS, open in Apple Maps */
        ((navigator.platform.indexOf("iPhone") != -1) || 
        (navigator.platform.indexOf("iPad") != -1) || 
        (navigator.platform.indexOf("iPod") != -1))
        // window.open(`comgooglemaps://?center=${weddingData.value.coordinate}&zoom=14`)
        window.open(`maps://maps.google.com/maps?daddr=${weddingData.value.coordinate}&amp;ll=`);
    else /* else use Google */
        window.open(`https://maps.google.com/maps?daddr=${weddingData.value.coordinate}&amp;ll=`);
    })

    const addToGoogleCalendar = () => {
      const start = formatDateTime(calendarData.value.startDate, calendarData.value.startTime, calendarData.value.timeZone);
      const end = formatDateTime(calendarData.value.endDate, calendarData.value.endTime, calendarData.value.timeZone);
      const title = encodeURIComponent(calendarData.value.event_name);
      const description = encodeURIComponent('');
      const location = encodeURIComponent(calendarData.value.location);
      const timeZone = encodeURIComponent(calendarData.value.timeZone);
      // console.log("Date:", timeZone)

      const googleCalendarUrl = `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${start}/${end}&details=${description}&location=${location}&ctz=${timeZone}`;
      window.open(googleCalendarUrl, '_blank');
    };

    const addBookmark = () => {
      const url = window.location.href;
      const title = document.title;

      // Detecting if the browser supports the bookmarking feature
      if (window.sidebar && window.sidebar.addPanel) {
        // Firefox <= 22
        window.sidebar.addPanel(title, url, "");
      } else if (window.external && window.external.AddFavorite) {
        // IE and older versions of Edge
        window.external.AddFavorite(url, title);
      } else if (window.opera && window.print) {
        // Opera before version 15
        nextTick(() => {
          alert('Press Ctrl+D to bookmark this page.');
        });
      } else {
        // All other browsers
        nextTick(() => {
          alert('Press Ctrl+D (Cmd+D for Mac) to bookmark this page.');
        });
      }
    }

    return {
        addToGoogleCalendar,
        webData,
        calendarData,
        weddingData,
        hijriDate,
        fullDate,
        gotoMap,
        openMapOption,
        closeModal,
        dialogRef,
        isOpenContact,
        closeModalContact,
        isOpen,
        openContactOption,
        addBookmark
    }
    }
}
</script>
<style lang="">
    
</style>