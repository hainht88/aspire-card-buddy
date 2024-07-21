<script setup lang="ts">
import { ref } from 'vue';
import { useCardStore } from '@/stores/card';

const cardStore = useCardStore();

const isOpened = defineModel<boolean>();
const name = ref('');

const onCLick = () => {
  cardStore.addNewCard({ name: name.value })
}
</script>

<template>
  <q-dialog v-model="isOpened">
      <q-card style="min-width: 350px">
        <q-card-section>
          <div class="text-h6">Your address</div>
        </q-card-section>

        <q-card-section class="q-pt-none">
          <q-input
            ref="inputRef"
            filled
            v-model="name"
            label="Name is required"
            :rules="[val => !!val || 'Name is required']"
          />
        </q-card-section>

        <q-card-actions align="right" class="text-primary">
          <q-btn flat label="Cancel" v-close-popup />
          <q-btn @click="onCLick" flat label="OK" v-close-popup />
        </q-card-actions>
      </q-card>
    </q-dialog>
</template>
