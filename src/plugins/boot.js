export default async ({ app, store, Vue }) => {
  // do some logic here...

  // ... then, kick off our Quasar website/app:
  new Vue(app);
  // "app" has everything cooked in by Quasar CLI,
  // you don't need to inject it with anything at this point
  await store.dispatch("getAuth");
};
