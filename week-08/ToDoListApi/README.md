# One List API

## Endpoints

GET items
POST items

GET item
PUT item
PUT /api/items/2
{
text:"",
complete:true/false
}

DELETE item

DELETE AllCompletedItems
DELETE api/items/completed
/

## Models

Id (PK)
complete : bool
text : string
created_at : DateTime
updated_at : DateTime
