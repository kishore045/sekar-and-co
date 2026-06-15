(function () {
  const config = window.SEKAR_FIREBASE_CONFIG || {};
  const hasConfig = Boolean(config.apiKey && config.projectId && window.firebase);
  let db = null;

  if (hasConfig) {
    firebase.initializeApp(config);
    db = firebase.firestore();
  }

  function localGet(key) {
    return JSON.parse(localStorage.getItem(key) || "[]");
  }

  function localSet(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  async function add(collection, item, localKey) {
    const payload = { ...item, updatedAt: new Date().toISOString() };
    if (db) {
      const doc = await db.collection(collection).add(payload);
      return { id: doc.id, ...payload };
    }
    const items = localGet(localKey);
    const saved = { id: Date.now().toString(), ...payload };
    items.unshift(saved);
    localSet(localKey, items);
    return saved;
  }

  async function list(collection, localKey) {
    if (db) {
      const snap = await db.collection(collection).orderBy("updatedAt", "desc").get();
      return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    }
    return localGet(localKey);
  }

  async function remove(collection, id, localKey) {
    if (db) {
      await db.collection(collection).doc(id).delete();
      return;
    }
    localSet(localKey, localGet(localKey).filter((item) => item.id !== id));
  }

  window.SekarDB = {
    enabled: Boolean(db),
    saveUser: (item) => add("users", item, "sekarFirebaseUsers"),
    saveOrder: (item) => add("orders", item, "sekarFirebaseOrders"),
    saveProduct: (item) => add("products", item, "sekarAdminProducts"),
    saveCategory: (item) => add("categories", item, "sekarAdminCategories"),
    listUsers: () => list("users", "sekarFirebaseUsers"),
    listOrders: () => list("orders", "sekarFirebaseOrders"),
    listProducts: () => list("products", "sekarAdminProducts"),
    listCategories: () => list("categories", "sekarAdminCategories"),
    removeProduct: (id) => remove("products", id, "sekarAdminProducts"),
    removeCategory: (id) => remove("categories", id, "sekarAdminCategories")
  };
})();
