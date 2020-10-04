<template>
  <div class="content">
    <div class="container">
      <section class="service-introduciton mt-3 mt-md-5 text-left">
        <h1 class="text-primary"><span class="d-none d-md-inline">歡迎來到</span> GoHome 客服中心</h1>
        <div class="mt-3 d-flex">
          <img class="service-introduciton-imgage mr-3 align-self-start d-none d-md-block" src="../../../public/facebook_profile_image.png" alt="">
          <p>
            GoHome 營造旅客宛如回到家的感覺，讓旅客身在異鄉卻又如此熟悉，放鬆之餘依然可以享受旅程，期待能帶給旅客高品質的旅館及服務，
            如果您對於我們的旅館有任何問題或建議，可以先參考<a href="#problems" class="text-secondary">常見問題</a>，<br>如仍未能解決您的疑問，歡迎您來電或來信與我們聯絡，我們將有專人與您聯絡。您的建議將是我們進步的動力。
          </p>
        </div>
      </section>
      <section class="mt-3 mt-md-5 text-left">
        <h2 class="h3"><font-awesome-icon class="mr-2" :icon="['fas', 'phone-alt']"/>聯絡我們</h2>
        <table class="table w-auto mt-3">
          <tbody>
            <tr>
              <th class="border-top-0 border-bottom border-primary">
                客服專線
              </th>
              <td class="border-top-0 border-bottom border-primary">
                <a href="tel:+886-800-989989">0800-989-989</a>
              </td>
            </tr>
            <tr>
              <th class="border-top-0 border-bottom border-primary">
                服務時間
              </th>
              <td class="border-top-0 border-bottom border-primary">
                週一至週五 9:30~17:00
                (例假日及午休 12:30~13:30 暫停服務)
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section class="mt-3 mt-md-5 text-left">
        <h2 class="h3"><font-awesome-icon class="mr-2" :icon="['fas', 'lightbulb']"/>你問我答 - 常見問題</h2>
        <div class="mt-3" id="problems">
          <div class="card" v-for="(item,index) in problems" :key="item.problem">
            <div class="card-header bg-primary">
              <h2 class="mb-0">
                <button class="btn btn-block text-left text-white" type="button" data-toggle="collapse" :data-target="`#problem${index}`">
                  {{ item.problem }}
                </button>
              </h2>
            </div>

            <div :id="`problem${index}`" class="collapse" data-parent="#problems">
              <div class="card-body">
                {{ item.answer }}
              </div>
            </div>
          </div>
      </div>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      problems: [
        {
          problem: 'Q : 我可以取消訂房嗎?',
          answer: '當然可以，如果在訂房日前 3 天則免手續費，若前 2 天則酌收 10% 服務費 ， 前 1 天則酌收 20% 服務費。'
        },
        {
          problem: 'Q : 我可以更改訂房嗎?',
          answer: '當然可以，在房間有空位的情況下，都可以更改喔。'
        },
        {
          problem: 'Q : 信用卡何時會扣款呢? 如果取消會歸還嗎?',
          answer: '一般都由旅館統一在入住當天扣款，所以只要在訂房日前取消訂房都不會進行扣款動作。'
        },
        {
          problem: 'Q : 是否可以加床 / 嬰兒床',
          answer: '需詢問旅館人員，通常都需要另外申請。'
        },
        {
          problem: 'Q : 是否可以提前入住 / 延後退房',
          answer: '需詢問旅館人員， GoHome 無法確定，需視旅館空防狀況而定，依旅館人員說明為主。'
        }
      ]
    }
  }
}

</script>
<style lang='scss'>
.service-introduciton-imgage{
  width: 120px;
}
</style>
