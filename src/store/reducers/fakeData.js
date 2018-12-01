import userAvatar1 from './../../App/public/avatar1.png'
import userAvatar2 from './../../App/public/avatar2.png'
import userAvatar3 from './../../App/public/avatar3.png'
import userAvatar4 from './../../App/public/avatar4.png'
import userAvatar5 from './../../App/public/avatar5.png'
import userAvatar6 from './../../App/public/avatar6.png'



export const chatNames = [
	'Chat1',
	'Chat2',
	'Chat3'
];

export const unread = [
	1,
	1,
	1,
];

export const messages = [
	{
	text: "hello, man",
	time: new Date().toLocaleTimeString(),
	spanText : 'v',
	yourMessage : false,
	}
];
export const chats = [
{
	chatName : 'Долли',
	avatar : userAvatar1,
},
{
	chatName : 'Додо',
	avatar : userAvatar2,
},
{
	chatName : 'Джими',
	avatar : userAvatar3,
},
{
	chatName : 'Буль',
	avatar : userAvatar4,
},
{
	chatName : 'Кендрик',
	avatar : userAvatar5,
},
{
	chatName : 'Шиле',
	avatar : userAvatar6,
},
]

export const formData = [
	{
		text: 'Let\'s play',
		file: undefined,
	},
	{
		text: 'I\'m your Daddy.',
		file: undefined,
	},
	{
		text: '',
		file: undefined,
	}
];