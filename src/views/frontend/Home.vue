<template>
  <div class="content">
    <div class="banner d-flex align-items-center justify-content-center">
      <div>
        <h2 class="text-white">
          新的旅程從訂房開始<font-awesome-icon :icon="['far', 'paper-plane']" />
        </h2>
      </div>
    </div>
    <div class="container">
      <section class="mt-5">
        <h2 class="mb-5">台灣之美</h2>
        <div class="row justify-content-center mb-5">
          <div class="col-5">
            <div class="bg-lg-image" style="background-image: url('https://images.unsplash.com/photo-1593251909033-7609592eac50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80');">
            </div>
          </div>
          <div class="col-5">
            <div class="d-flex flex-column justify-content-between h-100">
              <h3>台北 101</h3>
              <p class="text-left">
                台北 101是全臺灣最著名的也是最高的指標建築，裡面囊括世界知名品牌設櫃，包括服飾、珠寶、名牌包、各地美食，在88樓以上還設有景觀台，可以眺望整個大台北的美景，此外周遭也有需多著名商圈，西門町、東區、信義商圈、士林夜市及饒河夜市等等。
              </p>
              <button type="button" class="btn btn-primary align-self-end">現在就預定飯店</button>
            </div>
          </div>
        </div>
        <div class="row flex-row-reverse justify-content-center mb-5">
          <div class="col-5">
            <div class="bg-lg-image" style="background-image: url('https://i.imgur.com/Qsg6sSV.jpg');">
            </div>
          </div>
          <div class="col-5">
            <div class="d-flex flex-column justify-content-between h-100">
              <h3>台中國家歌劇院</h3>
              <p class="text-left">
                台中新的地標及文藝中心，請日本建築大師<span style="text-decoration:underline;">伊東豊雄</span>設計，使用無樑柱的<em>曲牆建築工法</em>。每日有許多館內導覽場次，供一般民眾了解，也有許多劇場提供大家觀看，結合育教娛樂，適合親子出遊、情侶遊玩的好地方，周遭還有秋紅谷生態公園、勤美術館、草悟道及一中商圈等等。
              </p>
              <button type="button" class="btn btn-primary align-self-end">現在就預定飯店</button>
            </div>
          </div>
        </div>
        <div class="row justify-content-center mb-5">
          <div class="col-5">
            <div class="bg-lg-image" style="background-image: url('https://i.imgur.com/5EisI0X.jpg');">
            </div>
          </div>
          <div class="col-5">
            <div class="d-flex flex-column justify-content-between h-100">
              <h3>台南北門鹽田</h3>
              <p class="text-left">
                古早時代，鹽田撐起台南一家子的經濟，隨著科技發展，現今鹽田變成親子同樂的好去處，吹著海風，鏟著腳下鹽巴，伴著孩子的嘻笑聲，好不熱鬧阿!附近有烏腳病醫療紀念館、水晶教堂。台南市區又是另一番風景，有古蹟安平古堡、赤崁樓、億載金城，台南也是美食故鄉有牛肉湯、蝦仁飯、鮮魚湯及鱔魚意麵等多樣平民美食。
              </p>
              <button type="button" class="btn btn-primary align-self-end">現在就預定飯店</button>
            </div>
          </div>
        </div>
        <div class="row flex-row-reverse justify-content-center">
          <div class="col-5">
            <div class="bg-lg-image" style="background-image: url('https://i.imgur.com/G6de4Lw.jpg');">
            </div>
          </div>
          <div class="col-5">
            <div class="d-flex flex-column justify-content-between h-100">
              <h3>高雄愛河璀璨之心</h3>
              <p class="text-left">
                愛河在重整完畢後，搖身一變變成當地著名的景點之一，河堤邊變成大家茶餘飯後散步的好場所，也吸引需多觀光客來愛河賞夜景。高雄也有許多必逛夜市瑞豐夜市、仁武夜市、凱旋青年夜市，著名景點像大魯閣草衙道、85大樓、夢時代、崗山之眼及衛武營等等。
              </p>
              <button type="button" class="btn btn-primary align-self-end">現在就預定飯店</button>
            </div>
          </div>
        </div>
      </section>
      <section class="mt-5">
        <h2>精選飯店推薦</h2>
        <div class="row">
          <div class="col-3">
            <div class="text-left bg-shadow">
              <div class="bg-md-image" style="background-image: url('https://images.unsplash.com/photo-1593251909033-7609592eac50?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80');"></div>
              <div class="p-3">
                <div class="d-flex align-items-end">
                  <h4 class="mb-0">飯店</h4>
                  <span class="ml-2">111</span>
                </div>
                <span>台北中正區</span>
              </div>
            </div>
          </div>
          <div class="col-3">

          </div>
          <div class="col-3">

          </div>
          <div class="col-3">

          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {};
  },
  created () {
    this.$bus.$emit('pushmessage', 'success', 'toast成功1');
    this.$bus.$emit('pushmessage', 'warning', 'toast成功2');
    this.$bus.$emit('pushmessage', 'success', 'toast成功3');
  }
};
</script>
<style lang="scss">
@import "../../assets/scss/mixin/mixin";
.banner {
  background-image: url("https://images.unsplash.com/photo-1502514841534-dceabea28dad?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1064&q=80");
  height: calc(100vh - 110px);
  @include bg-cover();
}
</style>
