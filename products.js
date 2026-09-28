/* 现场商品数据。只有真实核实过的商品、价格和库存才放进数组。
示例字段：
{
  id: "唯一编号", brand: "品牌", name: "商品名", color: "颜色",
  sizes: "尺码", price: "人民币应付金额", totalQty: 2, soldQty: 0, pendingQty: 0,
  stock: "剩余 2 件", image: "assets/图片名.jpg", updated: "更新时间",
  status: "可购买 / 库存紧张 / 已售罄",
  orderState: "下单成功（自动核对成功后生成）",
  shippingState: "已发货（物流信息查询编号和面单照片齐全后生成）", trackingNo: "物流信息查询编号", shippedAt: "发货记录时间"
}
*/
window.BRANDS = [
  {"name":"Lululemon","color":"#e31937","kind":"lululemon"},
  {"name":"Polo","color":"#ef9fbd","kind":"polo"},
  {"name":"Adidas","color":"#123b70","kind":"adidas"},
  {"name":"Nike","color":"#f36c21","kind":"nike"},
  {"name":"The North Face","color":"#111111","kind":"north"},
  {"name":"Other Brands","color":"#c2185b","kind":"other"}
];
window.PRODUCTS = [];
