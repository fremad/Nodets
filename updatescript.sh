db.collectionName.updateMany({}, {$set: {
    content: {title: "Some title", description: "Some description"}
}})


db.taskentries.updateMany({}, {$set: { status: "created" } });
