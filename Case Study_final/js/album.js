//Create album
function save() {
  //tao bien
  let name = document.getElementById("name").value;
  let artist = document.getElementById("artist").value;
  let release = document.getElementById("release-date").value;
  let receipt = document.getElementById("receipt-date").value;
  let quantity = document.getElementById("quantity").value;
  let price = document.getElementById("price").value;

  console.log(name, artist, release, receipt, quantity, price);

  //validate form, bat buoc nhap data
  if (name.length === 0) {
    document.getElementById("name-error").innerHTML = "Hãy nhập tên album!";
  } else document.getElementById("name-error").innerHTML = "";

  if (artist.length === 0) {
    document.getElementById("artist-error").innerHTML = "Hãy nhập tên artist!";
  } else document.getElementById("artist-error").innerHTML = "";

  if (release.length === 0) {
    document.getElementById("release-error").innerHTML =
      "Hãy nhập ngày phát hành!";
  } else document.getElementById("release-error").innerHTML = "";

  if (receipt.length === 0) {
    document.getElementById("receipt-error").innerHTML =
      "Hãy nhập ngày lưu kho!";
  } else document.getElementById("receipt-error").innerHTML = "";

  if (quantity.length === 0) {
    document.getElementById("quantity-error").innerHTML = "Hãy nhập quantity!";
  } else document.getElementById("quantity-error").innerHTML = "";

  if (price.length === 0) {
    document.getElementById("price-error").innerHTML = "Hãy nhập giá tiền!";
  } else document.getElementById("price-error").innerHTML = "";

  //save album

  if (name && artist && release && receipt && quantity && price) {
    let album = localStorage.getItem("album")
      ? JSON.parse(localStorage.getItem("album"))
      : [];

    album.push({
      name: name,
      artist: artist,
      release: release,
      receipt: receipt,
      quantity: quantity,
      price: price,
    });

    localStorage.setItem("album", JSON.stringify(album));

    this.callListAlbum();
  }
}

function callListAlbum() {
  let album = localStorage.getItem("album")
    ? JSON.parse(localStorage.getItem("album"))
    : [];

  if (album.length === 0) {
    document.getElementById("list-album").style.display = "none";
    return false;
  }

  document.getElementById("list-album").style.display = "block";
  let tableContent = `
    <tr>
    <td></td>
    <td>Tên album</td>
    <td>Nghệ sỹ</td>
    <td>Ngày phát hành</td>
    <td>Ngày nhập kho</td>
    <td>Số lượng</td>
    <td>Giá tiền</td>
    <td></td>
    </tr>`;

  album.forEach((album, index) => {
    let albumId = index;

    index++;
    tableContent += `
      <tr>
      <td>${index}</td>
    <td>${album.name}</td>
    <td>${album.artist}</td>
    <td>${album.release}</td>
    <td>${album.receipt}</td>
    <td>${album.quantity}</td>
    <td>${album.price}</td>
    <td>
    <div class ='btn-edit btn'' onclick='editAlbum(${albumId})'>Edit</div> | <div class ='btn-delete btn' onclick='deleteAlbum(${albumId})'>Delete</div>
    </td>
    </tr>`;
  });

  document.getElementById("view-album").innerHTML = tableContent;
}
// update album
//edit
function editAlbum(id) {
  let album = localStorage.getItem("album")
    ? JSON.parse(localStorage.getItem("album"))
    : [];

  document.getElementById("name").value = album[id].name;
  document.getElementById("artist").value = album[id].artist;
  document.getElementById("release-date").value = album[id].release;
  document.getElementById("receipt-date").value = album[id].receipt;
  document.getElementById("quantity").value = album[id].quantity;
  document.getElementById("price").value = album[id].price;
  document.getElementById("index").value = id;

  document.getElementById("save").style.display = "none";
  document.getElementById("update").style.display = "inline-block";
}
//update
function updateAlbum(id) {
  let album = localStorage.getItem("album")
    ? JSON.parse(localStorage.getItem("album"))
    : [];

  let index = document.getElementById("index").value;

  album[index] = {
    name: document.getElementById("name").value,
    artist: document.getElementById("artist").value,
    release: document.getElementById("release-date").value,
    receipt: document.getElementById("receipt-date").value,
    quantity: document.getElementById("quantity").value,
    price: document.getElementById("price").value,
  };

  localStorage.setItem("album", JSON.stringify(album));
  callListAlbum();
}


// Delete album
function deleteAlbum(id) {
  let album = localStorage.getItem("album")
    ? JSON.parse(localStorage.getItem("album"))
    : [];

  album.splice(id, 1);
  localStorage.setItem("album", JSON.stringify(album));
  callListAlbum();
}

