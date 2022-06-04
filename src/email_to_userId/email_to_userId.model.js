import db from "../firestore.js";

export default {
  async getAllEmailToUserId() {
    try {
      const allUsers = await db.collection("users").get();
      if (!allUsers) return false;
      return allUsers;
    } catch (error) {
      return false;
    }
  },

  async getById(email) {
    try {
      const userIds = await db.collection("email_to_userId").doc(email).get();
      if (!userIds.data()) return false;
      return userIds.data();
    } catch (error) {
      return false;
    }
  },

  async createEmailToUserIds(userId, email) {
    try {
      const newEmailToUserId = await db
        .collection("email_to_userId")
        .doc(email)
        .set({ userId: userId }, { merge: true });

      if (!newEmailToUserId) return false;
      return newEmailToUserId;
    } catch (error) {
      return false;
    }
  },

  async checkExistenceOfDocument(email) {
    try {
      const emailToUserIdRef = await db
        .collection("email_to_userId")
        .doc(email)
        .get();
      if (!emailToUserIdRef.data()) return false;
      return emailToUserIdRef.data();
    } catch (error) {
      return false;
    }
  },
};
