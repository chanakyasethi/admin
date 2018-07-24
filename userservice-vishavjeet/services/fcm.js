var admin = require("firebase-admin");

var serviceAccount = require("./fcmAccountKey");

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    databaseURL: "https://cfex-ionic-app.firebaseio.com"
});


var payload = {
    notification: {
        title: "Test Assigned",
        text: "New test has been assigned to you",
        click_action: "FCM_PLUGIN_ACTIVITY",
        sound: "default"
    },
    data: {
        title: "Test Assigned",
        message: "New test has been assigned to you"
    }
};

var options = {
    priority: "high",
};

module.exports = function (regToken) {
    return new Promise((resolve, reject) => {
        admin.messaging().sendToDevice(regToken, payload, options)
            .then((response) => {
                resolve(response);

            })
            .catch((err) => {
                reject(err);
            });
    });
}
