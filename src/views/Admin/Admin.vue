<template>
    <Sidebar/>
    <Topbar/>
        <Dashboard/>
        <Chat/>
</template>
<script>
import Sidebar from "@/components/Admin/Sidebar.vue";

import Topbar from "@/components/Admin/Topbar.vue";
import Dashboard from "@/components/Admin/Dashboard.vue";
import Chat from "@/components/Chat.vue";
import Announcement from "@/components/Admin/Announcement.vue";
import TotalPercentage from "@/components/Admin/TotalPercentage.vue";

export default {
  search:'',
  name: "Admin",
  components: { Topbar, Sidebar, Dashboard, Chat, Announcement},
  methods: {},
};
</script>