var ItemLibrary = function () {
  this.items = [{ name: 'Noodles', id: 0 }];
  this.index = 1;
  
  this.create = function (item) {
    var newItem = { name: item, id: this.index };
    this.items.push(newItem);
    this.index++;

    return newItem;
  };

  this.find = function (id) {
    for ( var item in this.items ) {
      if ( this.items[item].id == id ) { return this.items[item] }
    }
  };

  this.update = function (id, name) {
    var item = this.find(id);
    if ( item ) {
      item.name = name;
      return item;
    }
  };

  this.delete = function (id) {
    var item = this.find(id);
    var index = this.items.indexOf(item);  
    return ( index > -1 ) ? this.items.splice(index, 1) : null;
  }
}

module.exports = new ItemLibrary();