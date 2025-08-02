
/**
 * Update JSON object to add an id to each object recursively and increment the id for each child.
 * The id starts from 1 and increments for each object in the hierarchy.
 */

let counter = 1;
function updateJson(data) {
    data.id = counter++;
    if(data.children) {
        data.children.forEach(element => updateJson(element));
    }

    return data;
}

let inputJSON = { "name": "John", "children": [{ "name": "Alice" }, { "name": "Bob", "children": [{ "name": "Charlie" }] }] }
let outputJSON = { "name": "John", "id": 1, "children": [{ "name": "Alice", "id": 2 }, { "name": "Bob", "id": 3, "children": [{ "name": "Charlie", "id": 4 }] }] };

let updatedJSON = updateJson(inputJSON);
console.log(JSON.stringify(updatedJSON, null, 2));