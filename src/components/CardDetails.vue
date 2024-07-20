<script setup lang="ts">
const link = new URL('../assets/DownArrow.svg', import.meta.url).href;
</script>

<template>
  <div
    class="tw-w-full tw-bg-white tw-px-6 tw-pt-6 tw-pb-[88px] md:tw-pb-6 md:tw-px-0 lg:tw-px-0 lg:tw-p-0 lg:tw-mb-6 xl:tw-mt-[60px]"
  >
    <div class="tw-relative tw-flex tw-flex-col tw-gap-y-6">
      <!-- expansion 1 -->
      <q-expansion-item hide-expand-icon header-class="no-padding tw-rounded-lg">
        <template v-slot:header="{ expanded }">
          <q-item-section>
            <div
              class="tw-shadow-accordion tw-border tw-border-gray tw-rounded-lg tw-flex tw-justify-between tw-items-center tw-p-[26px] tw-bg-gray-3"
            >
              <div class="tw-flex tw-items-center tw-gap-x-3">
                <q-img height="24px" width="24px" src="../assets/CardDetails.svg" />
                <div class="tw-text-primary tw-text-14 tw-leading-[18px]">Card details</div>
              </div>
              <q-img
                height="24px"
                width="24px"
                src="../assets/DownArrow.svg"
                :class="{
                  'tw-rotate-180 tw-transition-all tw-duration-300': expanded,
                  'tw-rotate-0 tw-transition-all tw-duration-300': !expanded,
                }"
              />
            </div>
          </q-item-section>
        </template>

        <q-card class="tw-text-black tw-border tw-border-t-0">
          <q-card-section>
            <div>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem, eius reprehenderit
              eos corrupti commodi magni quaerat ex numquam, dolorum officiis modi facere maiores
              architecto suscipit iste eveniet doloribus ullam aliquid.
            </div>
          </q-card-section>
        </q-card>
      </q-expansion-item>

      <!-- expansion 2 -->
       <div>
          <q-expansion-item default-opened hide-expand-icon header-class="no-padding tw-rounded-lg tw-z-10">
            <template v-slot:header="{ expanded }">
              <q-item-section>
                <div
                  class="tw-shadow-accordion tw-border tw-border-gray tw-rounded-lg tw-flex tw-justify-between tw-items-center tw-p-[26px] tw-bg-gray-3"
                >
                  <div class="tw-flex tw-items-center tw-gap-x-3">
                    <q-img height="24px" width="24px" src="../assets/Transactions.svg" />
                    <div class="tw-text-primary tw-text-14 tw-leading-[18px]">Recent transactions</div>
                  </div>
                  <q-img
                    height="24px"
                    width="24px"
                    src="../assets/DownArrow.svg"
                    :class="{
                      'tw-rotate-180 tw-transition-all tw-duration-300': expanded,
                      'tw-rotate-0 tw-transition-all tw-duration-300': !expanded,
                    }"
                  />
                </div>
              </q-item-section>
            </template>

            <q-card class="tw-text-black tw-border tw-border-t-0 !tw-rounded-b-lg -tw-mt-1 tw-flex tw-flex-col tw-gap-y-6 tw-py-6">
              <q-card-section class="no-padding">
                <q-list dense>
                  <q-item dense>
                    <q-item-section top avatar>
                      <div class="tw-h-12 tw-w-12 tw-bg-accent-light tw-rounded-full tw-mr-2 tw-flex tw-justify-center tw-items-center">
                        <q-img width="16px" height="15.2px" src="../assets/FileStorage.svg" />
                      </div>
                    </q-item-section>

                    <q-item-section>
                      <div class="tw-flex tw-justify-between tw-items-start">
                      <div>
                        <div class="tw-text-14 tw-leading-[18px] tw-font-semibold tw-mb-2">
                          <q-item-label>Hamleys</q-item-label>
                        </div>
                        <div class="tw-text-13 tw-leading-[18px] tw-font-normal tw-text-gray-1 tw-mb-2">
                          <q-item-label caption lines="2"> 20 May 2020 </q-item-label>
                        </div>
                        
                        <q-item-label
                        ><div class="tw-mt-[12px] tw-text-primary-light tw-text-12 tw-leading-[18px] tw-font-semibold tw-flex">
                          <div class="tw-h-5 tw-w-6 tw-bg-primary-light tw-rounded-full tw-mr-2 tw-flex tw-justify-center tw-items-center">
                            <q-img width="10px" height="7.86px" src="../assets/BusinessAndFinance.svg" />
                          </div> Refund on debit card
                        </div></q-item-label
                        >
                      </div>
                      <div class="tw-flex tw-justify-center tw-items-center tw-gap-x-[10.5px]">
                        <q-item-label caption>
                          <div class="tw-text-secondary tw-text-14 tw-leading-[14px] tw-font-bold">
                            + S$ 150
                          </div>
                        </q-item-label>
                        <q-img height="12px" width="6.5px" src="../assets/Next.svg" />
                      </div>
                    </div>
                    </q-item-section>
                  </q-item>
                  <q-separator class="tw-mt-4" inset />
                </q-list>
              </q-card-section>

              <q-card-section class="no-padding">
                <q-list dense>
                  <q-item dense>
                    <q-item-section top avatar>
                      <div class="tw-h-12 tw-w-12 tw-bg-[#00D6B51A] tw-rounded-full tw-mr-2 tw-flex tw-justify-center tw-items-center">
                        <q-img width="16px" height="15.2px" src="../assets/Flights.svg" />
                      </div>
                    </q-item-section>

                    <q-item-section>
                      <div class="tw-flex tw-justify-between tw-items-start">
                      <div>
                        <div class="tw-text-14 tw-leading-[18px] tw-font-semibold tw-mb-2">
                          <q-item-label>Hamleys</q-item-label>
                        </div>
                        <div class="tw-text-13 tw-leading-[18px] tw-font-normal tw-text-gray-1 tw-mb-2">
                          <q-item-label caption lines="2"> 20 May 2020 </q-item-label>
                        </div>
                        
                        <q-item-label
                        ><div class="tw-mt-[12px] tw-text-primary-light tw-text-12 tw-leading-[18px] tw-font-semibold tw-flex">
                          <div class="tw-h-5 tw-w-6 tw-bg-primary-light tw-rounded-full tw-mr-2 tw-flex tw-justify-center tw-items-center">
                            <q-img width="10px" height="7.86px" src="../assets/BusinessAndFinance.svg" />
                          </div> Charged to debit card
                        </div></q-item-label
                        >
                      </div>
                      <div class="tw-flex tw-justify-center tw-items-center tw-gap-x-[10.5px]">
                        <q-item-label caption>
                          <div class="tw-text-black tw-text-14 tw-leading-[14px] tw-font-bold">
                            - S$ 150
                          </div>
                        </q-item-label>
                        <q-img height="12px" width="6.5px" src="../assets/Next.svg" />
                      </div>
                    </div>
                    </q-item-section>
                  </q-item>
                  <q-separator class="tw-mt-4" inset />
                </q-list>
              </q-card-section>

              <q-card-section class="no-padding">
                <q-list dense>
                  <q-item dense>
                    <q-item-section top avatar>
                      <div class="tw-h-12 tw-w-12 tw-bg-[#F251951A] tw-rounded-full tw-mr-2 tw-flex tw-justify-center tw-items-center">
                        <q-img width="16px" height="15.2px" src="../assets/Megaphone.svg" />
                      </div>
                    </q-item-section>

                    <q-item-section>
                      <div class="tw-flex tw-justify-between tw-items-start">
                      <div>
                        <div class="tw-text-14 tw-leading-[18px] tw-font-semibold tw-mb-2">
                          <q-item-label>Hamleys</q-item-label>
                        </div>
                        <div class="tw-text-13 tw-leading-[18px] tw-font-normal tw-text-gray-1 tw-mb-2">
                          <q-item-label caption lines="2"> 20 May 2020 </q-item-label>
                        </div>
                        
                        <q-item-label
                        ><div class="tw-mt-[12px] tw-text-primary-light tw-text-12 tw-leading-[18px] tw-font-semibold tw-flex">
                          <div class="tw-h-5 tw-w-6 tw-bg-primary-light tw-rounded-full tw-mr-2 tw-flex tw-justify-center tw-items-center">
                            <q-img width="10px" height="7.86px" src="../assets/BusinessAndFinance.svg" />
                          </div> Charged to debit card
                        </div></q-item-label
                        >
                      </div>
                      <div class="tw-flex tw-justify-center tw-items-center tw-gap-x-[10.5px]">
                        <q-item-label caption>
                          <div class="tw-text-black tw-text-14 tw-leading-[14px] tw-font-bold">
                            - S$ 150
                          </div>
                        </q-item-label>
                        <q-img height="12px" width="6.5px" src="../assets/Next.svg" />
                      </div>
                    </div>
                    </q-item-section>
                  </q-item>
                  <q-separator class="tw-mt-4" inset />
                </q-list>
              </q-card-section>

              <q-card-section class="no-padding">
                <q-list dense>
                  <q-item dense>
                    <q-item-section top avatar>
                      <div class="tw-h-12 tw-w-12 tw-bg-accent-light tw-rounded-full tw-mr-2 tw-flex tw-justify-center tw-items-center">
                        <q-img width="16px" height="15.2px" src="../assets/FileStorage.svg" />
                      </div>
                    </q-item-section>

                    <q-item-section>
                      <div class="tw-flex tw-justify-between tw-items-start">
                      <div>
                        <div class="tw-text-14 tw-leading-[18px] tw-font-semibold tw-mb-2">
                          <q-item-label>Hamleys</q-item-label>
                        </div>
                        <div class="tw-text-13 tw-leading-[18px] tw-font-normal tw-text-gray-1 tw-mb-2">
                          <q-item-label caption lines="2"> 20 May 2020 </q-item-label>
                        </div>
                        
                        <q-item-label
                        ><div class="tw-mt-[12px] tw-text-primary-light tw-text-12 tw-leading-[18px] tw-font-semibold tw-flex">
                          <div class="tw-h-5 tw-w-6 tw-bg-primary-light tw-rounded-full tw-mr-2 tw-flex tw-justify-center tw-items-center">
                            <q-img width="10px" height="7.86px" src="../assets/BusinessAndFinance.svg" />
                          </div> Charged to debit card
                        </div></q-item-label
                        >
                      </div>
                      <div class="tw-flex tw-justify-center tw-items-center tw-gap-x-[10.5px]">
                        <q-item-label caption>
                          <div class="tw-text-black tw-text-14 tw-leading-[14px] tw-font-bold">
                            - S$ 150
                          </div>
                        </q-item-label>
                        <q-img height="12px" width="6.5px" src="../assets/Next.svg" />
                      </div>
                    </div>
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-card-section>
            </q-card>
            <div class="tw-text-center tw-cursor-pointer tw-w-full tw-py-5 -tw-mt-1 tw-border-[#DDFFEC] tw-rounded-b-lg tw-bg-[#EDFFF5] tw-text-secondary tw-text-13 tw-font-semibold tw-leading-[18px]">
              View all card transactions
            </div>
          </q-expansion-item>
          
      </div>
    </div>
  </div>
</template>
