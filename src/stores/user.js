import { defineStore } from 'pinia';
import browser from 'webextension-polyfill';
import { fetchApi } from '@/utils/api';

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    backupIds: [],
    retrieved: false,
  }),
  actions: {
    async loadUser() {
      try {
        const response = await fetchApi('/me');
        const user = await response.json();

        if (!response.ok) throw new Error(response.message);

        const username = localStorage.getItem('username');

        if (!user || username !== user.username) {
          sessionStorage.removeItem('shared-workflows');
          sessionStorage.removeItem('user-workflows');
          sessionStorage.removeItem('backup-workflows');

          await browser.storage.local.remove([
            'backupIds',
            'lastSync',
            'lastBackup',
          ]);

          if (!user) return;
        }

        localStorage.setItem('username', user?.username);

        this.user = user;
      } catch (error) {
        console.error(error);
      }
    },
  },
});
