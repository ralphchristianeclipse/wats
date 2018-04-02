<template lang="pug">
  //- list-view(:items="teachers" label="Teachers" @select="onSelect")
  //-   template(slot="label" slot-scope="{ item }").
  //-     {{item.title}} {{item.firstname}} {{item.lastname}}
  //-   template(slot="sublabel-first" slot-scope="{ item }").
  //-     {{item.subj}}
  //-   template(slot="sublabel-last" slot-scope="{ item }").
  //-     {{item.t_email}}
  
  .row.gutter-md
    div(v-for="(item,index) of teachers" :key="index")
      .col-md-3.col-xs-12
        q-card.teacher-card(:class="item.subj | capitalizeFirst")
          q-item
            q-item-side(avatar='http://akveo.com/blur-admin-mint/assets/img/app/profile/Nasta.png')
            q-item-main
              q-item-tile(label='') {{item.title}} {{item.firstname}} {{item.lastname}}
              q-item-tile(sublabel='' ) 
                q-icon(name="library_books" size="12px" color="grey-6")
                |  {{item.subj}} Teacher
              q-item-tile(sublabel='') 
                q-icon(name="email" size="12px" color="grey-6")  
                |  Email: {{item.t_email}}
    
</template>

<script>
import ListView from "src/components/ListView";
export default {
  name: "ComponentTeachers",
  components: {
    ListView
  },
  props: {
    teachers: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    onSelect(teacher) {
      this.$router.push({ name: "teacher", params: { id: teacher.id } });
    }
  }
};
</script>

<style lang="stylus" scoped>
.teacher-card {
  padding: 10px 5px;
  background: #fff;
  position: relative;
}

.English.teacher-card:before {
  content: '';
  position: absolute;
  border-width: 10px;
  border-style: solid;
  border-color: #38A99D #38A99D transparent transparent;
  border-top: 10px solid #38A99D;
  top: 0;
  right: 0;
}

.Math.teacher-card:before {
  content: '';
  position: absolute;
  border-width: 10px;
  border-style: solid;
  border-color: #E4BF42 #E4BF42 transparent transparent;
  border-top: 10px solid #E4BF42;
  top: 0;
  right: 0;
}

.teacher-card .q-item-label {
  font-weight: 700;
  font-size: 16px;
}

.teacher-card .q-item-sublabel:first-letter {
  text-transform: uppercase;
}
</style>
