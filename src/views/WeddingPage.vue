<template lang="">
    <div
      style="max-width: 428px"
      class="min-w-screen min-h-screen flex items-center justify-center bg-white text-gray-800 shadow-xl h-full"
    >
      <!-- ============ First Section ============ -->
      <div class="bg-white h-full w-full px-5 pt-5">
        <div class="mb-8">
          <div
            class="h-[95vh] bg text-dark cursor-pointer block rounded-lg bg-gray-100 flex justify-center items-center flex-col text-center p-4 transform transition-all duration-300 scale-100 hover:scale-[.98]"
            :style="{
              backgroundImage: configData.bg_url ? `url(https://shafieramli.com/kad-kahwin/images/background/${configData.bg_url}.jpg)`: '',
              backgroundPosition: 'center',
              backgroundSize: 'cover',
            }
            "
          >
            <h4 class="font-bold">WALIMATUL URUS</h4>
            <div class="py-5">
              <h1 class="great-vibes-regular text-7xl font-bold capitalize">{{webData.first_name}}</h1>
              <h1 class="great-vibes-regular text-3xl font-bold">&</h1>
              <h1 class="great-vibes-regular text-7xl font-bold capitalize">{{webData.second_name}}</h1>
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
            class="cursor-pointer block rounded-lg flex justify-center px-5 py-24 transform transition-all duration-300 scale-100 hover:scale-[.98]"
            :style="{
              background: `${secondaryColor}`
            }"
          >
            <div class="absolute top-0 -mt-3">
              <div
                :style="{
                  background: `${primaryColor}`
                }"
                class="rounded-full align-center text-white text-xs py-1 px-2 leading-none"
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
          :style="{
            background: `${secondaryColor}`
          }"
            class="cursor-pointer block rounded-lg flex justify-center p-5 transform transition-all duration-300 scale-100 hover:scale-[.98]"
          >
            <div class="absolute top-0 -mt-3">
              <div 
              :style="{
                background: `${primaryColor}`
              }"
                class="rounded-full align-center text-white text-xs py-1 px-2 leading-none"
              >
                <span class="text-center">Lokasi, Tarik, Masa</span>
              </div>
            </div>
            <div class="text-black text-center">
              <div class="mb-3">
                <h3 class="text-black uppercase text-2xl font-bold leading-tight py-2">Tempat</h3>
                <h4 class="text-black text-lg">{{weddingData.location}}</h4>
              </div>
              <div class="mb-3">
                <h3 class="text-black uppercase text-2xl font-bold leading-tight py-2">Tarikh</h3>
                <h4 class="text-black text-lg">{{fullDate}}</h4>
              </div>
              <div class="mb-3">
                <h3 class="text-black uppercase text-2xl font-bold leading-tight py-2">Masa</h3>
                <h4 class="text-black text-lg">{{weddingData.startTime}} - {{weddingData.endTime}}</h4>
              </div>
            </div>
          </div>
        </div>
  
        <!-- ============ Countdown Section ============ -->
        <div class="mb-8">
          <div 
          :style="{
            background: `${secondaryColor}`
          }"
            class="cursor-pointer block rounded-lg flex justify-center p-5 transform transition-all duration-300 scale-100 hover:scale-[.98]"
          >
            <div class="absolute top-0 -mt-3">
              <div
                
                :style="{
                  background: `${primaryColor}`
                }"
                class="rounded-full align-center text-white text-xs py-1 px-2 leading-none"
              >
                <span class="text-center">Pengiraan Detik Majlis Perkahwinan</span>
              </div>
            </div>
             <Countdown :deadline="countdownDate" mainColor="#000" secondFlipColor="#000" countdownSize="3rem" labelSize="1.5rem" :flipAnimation="false" :labels="{days: 'Hari',hours: 'Jam',minutes: 'Minit',seconds: 'Saat'}"/>
          </div>
        </div>
  
        <!-- ============ Aturcara Section ============ -->
        <div class="mb-8">
          <div 
          :style="{
            background: secondaryColor
          }"
            class="cursor-pointer block rounded-lg flex justify-center p-5 transform transition-all duration-300 scale-100 hover:scale-[.98]"
          >
            <div class="absolute top-0 -mt-3">
              <div
                
                :style="{
                  background: primaryColor
                }"
                class="rounded-full align-center text-white text-xs py-1 px-2 leading-none"
              >
                <span class="text-center">Aturcara Majlis</span>
              </div>
            </div>
            <div class="text-black">
                <div class="">
                    <template v-for="(item, index) in tentatives" :key="index" >
                      <div v-if="item.time !== null & item.title !== null" class="relative pl-8 sm:pl-32 py-2 group">
                        <div class="tentative flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-full before:px-px sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2 after:border-4 after:box-content  after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5"
                        :style="{
                          '--before-bg': themeColor,
                          '--after-bg': themeColor,
                          '--after-border': themeColor
                        }">
                          <time 
                            :style="{
                              '--tentative-text-color': tentativeTimeColor,
                              '--tentative-bg-color': tentativeTimeBg,
                            }"
                            class="tentative-time sm:absolute left-0 translate-y-0.5 inline-flex items-center justify-center text-xs font-semibold uppercase w-20 h-6 mb-3 sm:mb-0 rounded-full">{{tentativeTime(item.time)}}
                          </time>
                          <div class="text-md font-bold text-slate-900 translate-y-1 uppercase">{{item.title}}</div>
                        </div>
                      </div>
                    </template>
                  </div>
            </div>
          </div>
        </div>
        
  
        <!-- =========== Sticky Navigation =========== -->
        <div
          class="sticky bottom-2 p-5 px-6 m-2 flex items-center justify-between backdrop-blur-sm bg-white/20 shadow-3xl text-gray-400 rounded-2xl cursor-pointer"
        >
          <div @click="openMapOption" 
          :style="{
            '--icon-color': primaryColor,
            '--icon-hover-color': secondaryColor
          }"
          class="icon flex flex-col items-center transition ease-in duration-200 ">
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
          <div @click="addToGoogleCalendar" 
            :style="{
              '--icon-color': primaryColor,
              '--hover-color': secondaryColor
            }"
            class="icon flex flex-col items-center transition ease-in duration-200">
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
          <div @click="openRsvpDialog" 
            :style="{
              '--icon-color': primaryColor,
              '--hover-color': secondaryColor
            }"
            class="icon flex flex-col items-center transition ease-in duration-200">
            <svg xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 -960 960 960" 
            fill="#fff" 
            stroke-width="34"
            stroke="currentColor"
            data-slot="icon"
            class="w-12 h-12">
              <path stroke-linecap="round"
              stroke-linejoin="round" d="M40-360v-240h140q25 0 42.5 17.5T240-540v40q0 18-10.5 33T204-444l36 84h-60l-34-80h-46v80H40Zm240 0v-60h120v-30h-80q-17 0-28.5-11.5T280-490v-70q0-17 11.5-28.5T320-600h140v60H340v30h80q17 0 28.5 11.5T460-470v70q0 17-11.5 28.5T420-360H280Zm290 0-70-240h60l40 137 40-137h60l-70 240h-60Zm150 0v-240h140q25 0 42.5 17.5T920-540v40q0 25-17.5 42.5T860-440h-80v80h-60ZM100-500h80v-40h-80v40Zm680 0h80v-40h-80v40Z"/>
            </svg>
          </div>
          <div @click="openContactOption"
          :style="{
            '--icon-color': primaryColor,
            '--hover-color': secondaryColor
          }"
          class="icon flex flex-col items-center transition ease-in duration-200">
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

      <!-- ======================== Dialog RSVP ======================== -->
      <TransitionRoot appear :show="isOpenRsvpDialog" as="template">
        <Dialog :initialFocus="dialogRef" as="div" @close="closeModalRsvp" class="relative z-10 ">
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
                      >RSVP
                      <PencilSquareIcon class="h-6 w-6 ml-1 text-gray-900" />
                      </DialogTitle>
                      <XMarkIcon 
                        @click="closeModalRsvp"
                        class="cursor-pointer h-8 w-8 p-1.5 ml-auto text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      />
                      <button ref="dialogRef"  /> 
                    </div>
                    <div class="mt-2 gap-4">
                      <form id="rsvpForm" @submit="handleSubmit" method="POST" :action="`https://docs.google.com/forms/u/0/d/e/${rsvpData.post}/formResponse`">
                        <label class="block mb-6">
                          <span class="text-gray-700">Nama</span>
                          <input
                            :name="rsvpData.invited_name"
                            type="text"
                            class="
                              block
                              w-full
                              mt-1
                              p-2
                              text-gray-700
                              border-gray-300
                              rounded-md
                              shadow-sm
                              focus:border-indigo-300
                              focus:ring
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            "
                            placeholder="Nama"
                          />
                        </label>
                        <label class="block mb-6">
                          <span for="people" class="text-gray-700">Bilangan orang yang dibawa bersama</span>
                          <input
                            :name="rsvpData.no_of_people"
                            type="number"
                            class="
                              block
                              w-full
                              mt-1
                              p-2
                              text-gray-700
                              border-gray-300
                              rounded-md
                              shadow-sm
                              focus:border-indigo-300
                              focus:ring
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            "
                            placeholder="1"
                          />
                        </label>
                        <label class="block mb-6">
                          <span class="text-gray-700">Ucapan</span>
                          <textarea
                            :name="rsvpData.wishes"
                            class="
                              block
                              w-full
                              mt-1
                              p-2
                              text-gray-700
                              border-gray-300
                              rounded-md
                              shadow-sm
                              focus:border-indigo-300
                              focus:ring
                              focus:ring-indigo-200
                              focus:ring-opacity-50
                            "
                            rows="3"
                            placeholder="Apa-apa ucapan buat pengantin ?"
                          ></textarea>
                        </label>
                        <div class="flex items-center space-x-6 mb-6">
                          <div class="flex items-center">
                            <input
                              type="radio"
                              :name="rsvpData.attendance"
                              value="Hadir"
                              id="radioButton1"
                              class="h-5 w-5"
                            />
                            <label
                              for="radioButton1"
                              class="pl-3 text-gray-700"
                            >
                              Hadir
                            </label>
                          </div>
                          <div class="flex justify-center content-center items-center">
                            <input
                              type="radio"
                              :name="rsvpData.attendance"
                              value="Tidak Hadir"
                              id="radioButton2"
                              class="h-5 w-5 checked:before:content-['✔'] checked:before:text-[24px] "
                            />
                            <label
                              for="radioButton2"
                              class="pl-3 text-gray-700"
                            >
                              Tidak Hadir
                            </label>
                          </div>
                        </div>
                        <div class="">
                          <button
                            type="submit"
                            class="
                              h-10
                              px-5
                              text-indigo-100
                              bg-indigo-700
                              rounded-lg
                              transition-colors
                              duration-150
                              focus:shadow-outline
                              hover:bg-indigo-800
                            "
                          >
                            Submit RSVP
                          </button>
                          <p id="submitRespond" class="text-gray-700 hidden">Thank You for Your RSVP Registration</p>
                        </div>
                      </form>
                    </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </TransitionRoot>
      

      <!-- ======================== Dialog Contact ======================== -->
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
                      >Contact 
                      <DevicePhoneMobileIcon class="h-6 w-6 ml-1 text-gray-900" />

                      </DialogTitle>
                      <XMarkIcon 
                        @click="closeModalContact"
                        class="cursor-pointer h-8 w-8 p-1.5 ml-auto text-gray-500 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm items-center dark:hover:bg-gray-600 dark:hover:text-white"
                      />
                      <button ref="dialogRef" ></button>
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
import { onMounted, computed, ref  } from 'vue';
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
import { XMarkIcon,MapPinIcon,PhoneIcon,DevicePhoneMobileIcon, PencilSquareIcon } from '@heroicons/vue/24/outline';

export default {
    name: "WeddingPage",
    components:{
        Countdown,
        TransitionRoot,
        TransitionChild,
        // eslint-disable-next-line vue/no-reserved-component-names
        Dialog,
        DialogPanel,
        DialogTitle,
        XMarkIcon,
        MapPinIcon,
        PhoneIcon,
        DevicePhoneMobileIcon,
        PencilSquareIcon,
    },
    setup() {
    const store = useStore();
    const { webData, calendarData, weddingData, rsvpData, configData } = storeToRefs(store);
    const route = useRoute()
    const isOpen = ref(false)
    const dialogRef = ref(null)
    const isOpenContact = ref(false)
    const isOpenRsvpDialog = ref(false)

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

    const openRsvpDialog = () => {
      isOpenRsvpDialog.value = true;
    }

    const closeModalRsvp = () => {
      isOpenRsvpDialog.value = false;
    }

    onMounted(async() => {
      await store.getWebData(route.params.name);
      await store.getCalendarData(route.params.name);
      await store.getWeddingData(route.params.name);
      await store.getRSVPData(route.params.name);
      await store.getConfigData(route.params.name);
    })

    const themeColor = computed(() => configData.value.theme || '#348784');
    const tentativeTimeColor = computed(() => configData.value.tentative_time_text || '#059669');
    const tentativeTimeBg = computed(() => configData.value.tentative_time_bg || '#d1fae5');
    const primaryColor = computed(() =>  configData.value ? configData.value.theme : '')
    const secondaryColor = computed(() =>  configData.value ? configData.value.secondary_theme : '')

    const handleSubmit = (event) => {
      event.preventDefault(); // Prevent the default form submission

      const form = event.target;
      const formData = new FormData(form);

      fetch(form.action, {
        method: 'POST',
        body: formData,
        mode: 'no-cors',
      })
        .then(() => {
          // Hide the form and display the success message
          document.querySelector('#rsvpForm button').style.display = 'none';
          document.querySelector('#rsvpForm #submitRespond').style.display = 'block';
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    };

    
    const tentatives = computed(() => {
      const data = weddingData.value;
      const result = [];

      // Loop through the keys in the object
      for (let i = 1; i <= 4; i++) {
        const title = data[`tentative_${i}`];
        const time = data[`tentative_${i}_time`];

          result.push({
            title: title,
            time: time,
          });
      }

      return result;
    });

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

    const countdownDate = computed(() => {
      if(weddingData.value.date) {
        const dateParts = weddingData.value.date.match(/\d+/g); 
  
        if (dateParts && dateParts.length === 3) {
          // Parse year, month (adjusted for 0-indexing), and day
          const year = parseInt(dateParts[0], 10);
          const month = parseInt(dateParts[1], 10); // Months are 0-based
          const day = parseInt(dateParts[2], 10);

          // Create a new Date object
          const dateObject = new Date(year, month, day);

          // Format the date as 'YYYY-MM-DD 00:00:00'
          return `${dateObject.getFullYear()}-${String(dateObject.getMonth() + 1).padStart(2, '0')}-${String(dateObject.getDate()).padStart(2, '0')} 00:00:00`;
        }
      }
      return '1970-01-01 00:00:00'
    })

    const tentativeTime = (time) => {
      // Extract time components from the string
      if(time) {
        const timeString = time.match(/\d+/g);
        
        if (!timeString || timeString.length < 4) {
          return 'Invalid Time';
        }
  
        const hours24 = parseInt(timeString[3], 10); // 24-hour format
        const minutes = parseInt(timeString[4], 10);
  
        // Convert to 12-hour format
        const period = hours24 >= 12 ? 'PM' : 'AM';
        const hours12 = (hours24 % 12 || 12).toString().padStart(2, '0'); // Convert to 12-hour format
        const formattedMinutes = minutes.toString().padStart(2, '0');
  
        return `${hours12}:${formattedMinutes} ${period}`;
      }
    }

    const formatDateTime = (date, time) => {
      // Create a Date object and convert to ISO 8601 format
      const dateTime = new Date(`${date}T${time}`);
      // Format as `yyyyMMddTHHmmssZ` (UTC timezone)
      return dateTime.toISOString().replace(/-|:|\.\d\d\d/g, "");
    };

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

   
    return {
        addToGoogleCalendar,
        webData,
        calendarData,
        weddingData,
        rsvpData,
        hijriDate,
        fullDate,
        openMapOption,
        closeModal,
        dialogRef,
        isOpenContact,
        closeModalContact,
        isOpen,
        openContactOption,
        isOpenRsvpDialog,
        openRsvpDialog,
        closeModalRsvp,
        handleSubmit,
        countdownDate,
        tentativeTime,
        tentatives,
        configData,
        primaryColor,
        secondaryColor,
        themeColor,
        tentativeTimeColor,
        tentativeTimeBg
    }
    }
}
</script>
<style>
/* Tailwind custom properties to handle the dynamic colors */
.tentative::before {
  background-color: var(--before-bg);
}

.tentative::after {
  background-color: var(--after-bg);
  border-color: var(--after-border);
}

.tentative-time {
  color: var(--tentative-text-color);
  background-color: var(--tentative-bg-color);
}

.icon {
  color: var(--icon-color);
}

.icon:hover {
  color: var(--icon-hover-color);
}

.flip-clock__piece {
  margin: 0 10px !important;
}
</style>