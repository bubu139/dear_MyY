const notificationsStack = document.querySelector(".notifications-stack");

const notificationExamples = [
	"Helluuu bạn bồ dth",
	"Bn công chúa của tuiii khỏe honggg",
	"Gửi bn bồ một chút xíu niềm vui nè",
    "Kèm theo nhìu chút yêu thương nữa",
    "Và những cái ôm của tui tới MyY nữa",
    "Mình chuyển qua trang tiếp theo nèee"
];
const notifications = [];
let notificationIndex = 0;

notificationsStack.addEventListener("click", () => {
	removeLastNotification();
});

function removeLastNotification() {
	const element = notifications.pop();
	console.log(element);
	element.classList.add("remove");

	setTimeout(() => {
		element.remove();
	}, 400);
}

function createNotification(content) {
	const element = document.createElement("div");
	element.className = "notification";

	element.textContent = content;

	notificationsStack.append(element);
	notifications.push(element);
}

function newNotification() {
	content =
		notificationExamples[notificationIndex % notificationExamples.length];

	createNotification(content);
	notificationIndex++;
}

setInterval(newNotification, 3100);

newNotification();
if(notificationIndex == 6){
    const extra = document.getElementById("extra-button");
    extra.classList.add("fade-in");
}

function button_1() {
    window.location.href = 'login/login.html';
}