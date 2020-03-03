// Copyright 2017 the V8 project authors. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

// Generated by tools/bigint-tester.py.

var data = [{
  a: -0x1e0f357314bac34227333c0c2086430dae88cb538f161174888591n,
  b: 0x390n,
  r: -0x8700f00dd65d4009ab90c5d3a887e9c8ad110a72ca7e0f84a40n
}, {
  a: 0x9b7a0098fd2d495b4b2c76ff5888ae2a0359cfec6b029e6f3ee9b014802n,
  b: 0xbn,
  r: 0xe225d252e49ef6563ecc4fff0c69b782ed99e89db2ec895bfe6b2ea974n
}, {
  a: 0x6821a6dad136b9f64096337b45d6d947cf0f0b55501e33e66fbc4ef9776n,
  b: 0xan,
  r: 0xa69c3e2ae8578ff06756b8c53c8af53fb1b1abbbb363863d7f93b18f25n
}, {
  a: 0xf42f96f0c7f5a9c656a66122a9bcc57aa386bdb9a834e4174d45795ae408dae14e085cn,
  b: -0x5e0d81a1107ef9a38b4f24b4n,
  r: -0x298a4d479eac8c186fd61939024b420080b6ae6500c70c1n
}, {
  a: 0xbaf7baed984dda3c20f23201f366257c601f7fbcaf51d8b738a68fd92b4n,
  b: 0xd24a1eafcn,
  r: 0xe39bd4d870d72880e6ad88ec17bcca6bd0eaacfbbd28ba7458n
}, {
  a: -0xa658d0683d450bfec3de3fe4253f4348dd8e9a5b1002f6c24ff0en,
  b: -0xeffb9a6fa690e0be59aba488b7a7c5a85a65a018242n,
  r: 0xb1730d7206n
}, {
  a: 0x5a65f7b2dace4550099f4009192caa513468ef4da7e2fd81n,
  b: 0xf144f8bfad42d9beaf7b82a46561n,
  r: 0x5feae36e8e4932adcb21n
}, {
  a: -0x87271b0cbb63eba5e3d70f6af1aa6ec60c0a7884fb8d657b03en,
  b: -0xb67f8c18099ce8fa0c0f4ce2852b5590f7a8037d326b0n,
  r: 0xbd9602n
}, {
  a: 0xd4bc42a434dba1427d387f0858aaf39c6281ffc0f10b8b0996cb3bfn,
  b: -0x4198d1fec9b48e38d42f2e295abc39c2a6866527efn,
  r: -0x33e39b6878d955n
}, {
  a: 0x6a6f0c97d974dfd20337ca611dbdc96433964a206d54n,
  b: 0x16c7c6f9e0e4e24d521e463fecb394e2936f3104590n,
  r: 0x4an
}, {
  a: -0xd09af7515272d81a64307afaed8854c8e2996d8e01d4864n,
  b: 0x7521dfcbdf4cfbbf8d3859bf67618c91dc6915718303dbn,
  r: -0x1cn
}, {
  a: 0xf0da5f24832a2b651aac5dff62b22475212c26e123ff78c34560f35e9bcn,
  b: -0xf9n,
  r: -0xf79fbd51bf65f518c82563b974e4632b505ebe13adbfb6c297859a98cn
}, {
  a: 0x76f4f5b5de8a263514554d62273e51f40342d5df692ae17625ead5b5fen,
  b: -0xa5e697c57fb65858604e0a060737e7d9d1en,
  r: -0xb78fb2167de210959e57cd3n
}, {
  a: -0xa714d4d9d747fa5258f80f3887f4dda8a11423050046282n,
  b: -0xaa3b218ab92e21920a707487fdbn,
  r: 0xfb437487ba8580181ca3n
}, {
  a: -0x165f3c659ac4157cb3af081b3fc42c0c788e2df501596c2b8n,
  b: -0xfaa86d6eca3n,
  r: 0x16d94bce4865cf842d17a399d8b4467f3f369fn
}, {
  a: 0x268d93a21aab44c52f961b1c97c002f427eb8b11e0707e3879c3a348f8e2b1c40c122n,
  b: 0x70ccda2e2bba53b124c877bb4edbdbd387742cfe59d9bn,
  r: 0x577effaeb2338647e38edb43n
}, {
  a: 0x3a13493c9e8d3d986a2a56c0aa811be408e1560f30ae155n,
  b: -0x62a1a35fd7e184be45a1d0ba67888f0d982afb7a90an,
  r: -0x96bcn
}, {
  a: -0x2a3f3f90ea280bf64e7e460f004ea4fb2553637cb7c844f349f045ffdbn,
  b: -0xf2af2581bddfd9bfc1158c86211c4f4b169c0b1n,
  r: 0x2c90ab8577b8d0ee86en
}, {
  a: 0x8fd5f992d4d767c8a360ad32142fa9e9d87bc0036d1d6bb7aa7471dd7f38bn,
  b: 0xe70n,
  r: 0x9f6709805e05fd8b3c433e470387f06391b6948459e4c2bc072747e2a0n
}, {
  a: 0x52c0e08ba0a22a00498058dfeeaab2b21909e81e30c48652699n,
  b: 0x1d516c96827an,
  r: 0x2d2967f58654a5d30934348b225bf2b6e2a3123dn
}];

var error_count = 0;
for (var i = 0; i < data.length; i++) {
  var d = data[i];
  var r = d.a / d.b;
  if (d.r !== r) {
    print("Input A:  " + d.a.toString(16));
    print("Input B:  " + d.b.toString(16));
    print("Result:   " + r.toString(16));
    print("Expected: " + d.r);
    print("Op: /");
    error_count++;
  }
}
if (error_count !== 0) {
  print("Finished with " + error_count + " errors.")
  quit(1);
}
