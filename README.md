# Hotel Reservation System

# To Start The App Run
```
git clone https://github.com/shayanraouf/hrs.git
cd hrs
npm install --save
node index.js
```

# APIS:

## POST `/create_room` 
```
{
	"number": "700",
	"name": "room_700",
	"type_id": 1
 }
```

## POST `/create_reservation`
```
{
	"checkInDate": "",
	"checkOutDate": "",
	"room": {
		"number": 201,
		"name": "",
		"type" 5
	}
	"guest": {
        "first_name" : "shayan",
        "last_name" : "raouf",
        "email" : "shayanraouf@gmail.com"
    }
 }
```

## GET `/all_rooms` returns all rooms
## GET `/reservations/{checkInDate}/{checkOutDate}` returns a list of reservations with in the time frame