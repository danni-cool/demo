<template>
  <div>
    <ContentSearchHeader />

    <ContentBlock class="pt-2">
      <template #title>
        <div class="flex items-center">
          <md-icon class="text-sm opacity-50">payments</md-icon>
          <span class="text-sm ml-1 opacity-70">PAYMENT</span>
        </div>
        <div class="flex items-center mt-3 mb-3">
          <h1 class="inline-block text-3xl my-0 text-black opacity-80">$20.00</h1>
          <span class="text-3xl ml-2 font-light opacity-80">USD</span>
          <span class="pointer-events-none ml-2">
            <md-filter-chip selected label="Succeeded" class="filter-chip"></md-filter-chip>
          </span>
          <!-- <div
            class="tag-button flex items-center leading-none ml-2 pl-1 text-xs border border-solid rounded text-md3-primary-100 font-medium">
            Succeeded <md-icon class="text-base size-5">check</md-icon>
          </div> -->
        </div>
      </template>

      <template #btns>
        <div class="text-right">
          <div class="cursor-pointer text-sm flex items-center mb-1">
            <span class="text-black text-opacity-50 text-xs">pi_3PF6xZAqkzzGorqL1DRq1u0T</span>
            <md-icon class="text-sm text-black text-opacity-50">file_copy</md-icon>
          </div>
          <md-outlined-button class="outline-btn h-6 w-22 px-2"><span class="text-sm font-normal">Refund</span>
            <md-icon slot="icon">reply</md-icon>
          </md-outlined-button>
          <IconBtn iconName="more_horiz" class="ml-2" />
        </div>
      </template>

      <ul class="divide-x divide-y-0 divide-solid divide-slate-200 list-none pl-0 flex">
        <li class="px-4 pl-0 mr-2 flex items-center">
          <div>
            <div class="mb-1 text-sm opacity-60">Last update</div>
            <div class="text-sm opacity-95">May 11, 11:50 AM</div>
          </div>
        </li>
        <li class="px-4 mr-2 flex items-center">
          <div>
            <div class="mb-1 text-sm opacity-60">Customer</div>
            <div class="text-sm opacity-95 text-md3-primary-container-100 font-medium">Daniel Chan</div>
          </div>
        </li>
        <li class="px-4 mr-2 flex items-center">
          <div>
            <div class="mb-1 text-sm opacity-60">Payment method</div>
            <div class="text-sm opacity-95 flex items-center"><span
                class="size-5 overflow-hidden rounded inline-block"><svg
                  class="SVGInline-svg SVGInline--cleaned-svg SVG-svg BrandIcon-svg BrandIcon--size--20-svg" height="20"
                  width="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" fill-rule="evenodd">
                    <path d="M0 0h32v32H0z" fill="#00579f"></path>
                    <g fill="#fff" fill-rule="nonzero">
                      <path
                        d="M13.823 19.876H11.8l1.265-7.736h2.023zm7.334-7.546a5.036 5.036 0 0 0-1.814-.33c-1.998 0-3.405 1.053-3.414 2.56-.016 1.11 1.007 1.728 1.773 2.098.783.379 1.05.626 1.05.963-.009.518-.633.757-1.216.757-.808 0-1.24-.123-1.898-.411l-.267-.124-.283 1.737c.475.213 1.349.403 2.257.411 2.123 0 3.505-1.037 3.521-2.641.008-.881-.532-1.556-1.698-2.107-.708-.354-1.141-.593-1.141-.955.008-.33.366-.667 1.165-.667a3.471 3.471 0 0 1 1.507.297l.183.082zm2.69 4.806.807-2.165c-.008.017.167-.452.266-.74l.142.666s.383 1.852.466 2.239h-1.682zm2.497-4.996h-1.565c-.483 0-.85.14-1.058.642l-3.005 7.094h2.123l.425-1.16h2.597c.059.271.242 1.16.242 1.16h1.873zm-16.234 0-1.982 5.275-.216-1.07c-.366-1.234-1.515-2.575-2.797-3.242l1.815 6.765h2.14l3.18-7.728z">
                      </path>
                      <path
                        d="M6.289 12.14H3.033L3 12.297c2.54.641 4.221 2.189 4.912 4.049l-.708-3.556c-.116-.494-.474-.633-.915-.65z">
                      </path>
                    </g>
                  </g>
                </svg></span> <span class="ml-2">••••
                4242</span>
            </div>
          </div>
        </li>
        <li class="px-4 mr-2 flex items-center">
          <div>
            <div class="mb-1 text-sm opacity-60">Risk evaluation</div>
            <div class="text-sm opacity-95 flex items-center">
              <RiskStatus />
            </div>
          </div>

        </li>
      </ul>

    </ContentBlock>

    <ContentBlock title="Timeline" extraDivideBottom>
      <template #btns>
        <md-outlined-button class="outline-btn h-6 px-2"><span class="text-sm font-normal">Add note</span>
          <md-icon slot="icon">add</md-icon>
        </md-outlined-button>
      </template>

      <Timeline :listData="timelineBlockData" />
    </ContentBlock>

    <ContentBlock title="Payment details">
      <FormBlock :data="paymentDetailData" />
    </ContentBlock>

    <ContentBlock title="Payment method">
      <FormBlock :data="paymentMethodData" heightCls="h-[10.5rem]" />
    </ContentBlock>

    <ContentBlock title="Risk insights" extraDivideBottom class="pb-3">
      <template #title>
        <div class="flex items-center mt-3 mb-3">
          <svg class="SVGInline-svg SVGInline--cleaned-svg SVG-svg ProductIcon-svg" height="20" width="20"
            viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M24.872 4.465a1.264 1.264 0 0 0-1.798.194l-4.613 5.824-15.03 18.97c.273.216.535.448.783.693.06.056.113.112.169.171.35.358.672.743.961 1.152l.094.134c.3.439.563.902.783 1.386.01.014.018.029.025.044l-.003-.003c.286.624.503 1.277.646 1.948a2.497 2.497 0 0 0 2.448 1.935h29.37a1.271 1.271 0 0 0 1.27-1.295A42.429 42.429 0 0 0 24.873 4.465Z"
              fill="#9A66FF"></path>
            <path
              d="M27.803 21.983a33.817 33.817 0 0 0-9.34-11.503 34.514 34.514 0 0 0-12.51-6.202 1.29 1.29 0 0 0-1.56.98L.083 25.401A2.54 2.54 0 0 0 1.49 28.28a9.48 9.48 0 0 1 1.939 1.177c.273.217.535.448.783.693.06.056.112.112.169.172.351.356.674.74.964 1.148l.094.135c.3.438.563.902.783 1.386a.23.23 0 0 1 .025.043L27.18 23.72a1.29 1.29 0 0 0 .625-1.736Z"
              fill="url(#pi_radar__a)"></path>
            <path
              d="m18.464 10.48.467.376a33.82 33.82 0 0 1 8.872 11.127 1.29 1.29 0 0 1-.624 1.736L6.246 33.033a.314.314 0 0 0-.025-.044 9.152 9.152 0 0 0-.783-1.385l-.094-.135-.223-.302a9.414 9.414 0 0 0-.738-.85 9.7 9.7 0 0 0-.952-.865l15.03-18.969.003-.003Z"
              fill="url(#pi_radar__b)"></path>
            <defs>
              <linearGradient id="pi_radar__a" x1="13.977" y1="4.236" x2="13.977" y2="33.033"
                gradientUnits="userSpaceOnUse">
                <stop offset="0.26" stop-color="#FF5091"></stop>
                <stop offset="0.91" stop-color="#E03071"></stop>
              </linearGradient>
              <linearGradient id="pi_radar__b" x1="15.682" y1="10.48" x2="15.682" y2="33.033"
                gradientUnits="userSpaceOnUse">
                <stop stop-color="#6E00F5"></stop>
                <stop offset="1" stop-color="#9860FE"></stop>
              </linearGradient>
            </defs>
          </svg>
          <h3 class="inline-block my-0 text-black opacity-90 ml-2">Risk insights</h3>
          <md-icon class="text-xs opacity-50 cursor-pointer">info</md-icon>
        </div>
      </template>
      <template #btns>
        <div class="flex items-center">
          <RiskStatus fontCls="text-black opacity-80 font-medium text-sm" />
          <md-outlined-button class="outline-btn h-6 ml-4 px-2"><span class="text-sm font-normal">Show all insights</span>
          </md-outlined-button>
        </div>
      </template>

      <NotifyBlock>Risk insights are unavailable in test mode.</NotifyBlock>
      <NotifyBlock warn class="mt-2" showBtn>
        <template #title>
          Integration improvement available
        </template>
        Risk insights are unavailable in test mode.
      </NotifyBlock>

      <div class="flex mt-4">
        <div class="flex-1">
          <h5 class="font-normal text-black opacity-90 m-0">CUSTOMER</h5>
          <FormBlock :data="customerData" col="1" class="mt-2" />
        </div>
        <div class="flex-1">
          <div class="flex items-center -mt-1">
            <h5 class="font-normal text-black opacity-90 inline-block m-0">LOCATION</h5>
            <md-icon class="text-sm opacity-50">info</md-icon>
          </div>
          <div class="border rounded border-solid border-slate-200 p-2 pt-0">
            <div id='map' class="w-full h-48"></div>

            <div class="mt-8 px-2">
              <span class="text-sm">No session data available. <span
                  class="text-md3-primary-container-100 cursor-pointer hover:text-black">Learn more.</span></span>
              <FormBlock :data="ipData" contentAlignR col="1" class="mt-2 mb-0" />
            </div>
          </div>
        </div>
      </div>

    </ContentBlock>

    <ContentBlock title="Related payments">
      <TableBlock />
    </ContentBlock>

    <ContentBlock title="MetaData">
      <template #btns>
        <md-text-button class="outline-btn h-6">Edit metadata
          <md-icon slot="icon">edit_square</md-icon>
        </md-text-button>
      </template>

      <div class="opacity-50 text-sm mt-4">No metadata</div>
    </ContentBlock>

    <ContentBlock title="Connections">
      <FormBlock :data="[{ title: 'Latest charge', detail: 'ch_3PF6xZAqkzzGorqL1XI7mHQj' }]" />
    </ContentBlock>

    <ContentBlock title="Receipt history">
      <div class="text-sm mt-4">No receipts sent</div>
    </ContentBlock>

    <ContentBlock title="Events and logs">
      <div class="text-sm mt-4">LATEST ACTIVITY</div>
      <div class="text-xs mt-3"> <span class="font-light opacity-70">PaymentIntent status: </span><span
          class="font-light">succeeded</span></div>

      <div class="my-divide-t mt-6 flex">
        <div class="overflow-auto max-h-[894px] pr-6">
          <div class="text-sm pt-4 pb-4">ALL ACTIVITY</div>
          <Timeline type="complex" :listData="timeLimeComplex" />
        </div>
        <div class="p-6">
          <div class="flex items-center opacity-60">
            <md-icon class="text-base -ml-1">swap_horiz</md-icon>
            <span class="text-xs">From Stripe</span>
          </div>

          <div class="">invoice.finalized</div>
          <div class="text-sm cursor-pointer mt-2 text-md3-primary-container-100 hover:text-black">View event detail
          </div>
          <div class="mt-4 text-sm">Event data</div>
          <div class="overflow-hidden h-64 relative">
            <pre class="line-numbers opacity-90"><code class="language-javascript">{{ code }}</code></pre>
            <div class="gradient-bottom"></div>
          </div>
          <md-outlined-button class="outline-btn h-6 ml-20 px-2"><span class="text-xs font-normal">See all 18 lines</span>
            <md-icon slot="icon">arrow_downward_alt</md-icon>
          </md-outlined-button>
        </div>
      </div>
    </ContentBlock>
  </div>
</template>

<script setup>
import TableBlock from './TableBlock.vue'
import { reactive, onMounted } from 'vue'
import ContentSearchHeader from './ContentSearchHeader.vue'
import ContentBlock from './ContentBlock.vue'
import IconBtn from './IconBtn.vue'
import Timeline from './Timeline.vue'
import RiskStatus from './RiskStatus.vue'
import NotifyBlock from './NotifyBlock.vue'
import FormBlock from './FormBlock.vue'
import Prism from 'prismjs'
import 'prismjs/plugins/line-numbers/prism-line-numbers.js'
import 'prismjs/plugins/line-numbers/prism-line-numbers.css'

const timelineBlockData = reactive([{
  icon: 'check_circle',
  text: 'Payment succeeded',
  time: 'May 11, 2024, 11:50 AM'
}, {
  icon: 'payments',
  text: 'Payment started',
  time: 'May 11, 2024, 11:50 AM'
}])

const paymentDetailData = reactive([{
  title: 'Statement descriptor',
  detail: 'Stripe',
}, {
  title: 'Amount',
  detail: '$20.00 USD -> $153.16 HKD',
  infoTag: true
}, {
  title: 'Payment exchange rate',
  detail: '$1.00 USD -> $7.65795 HKD',
},
{
  title: 'Fee',
  detail: '$8.32 HKD',
  infoTag: true
}, {
  title: 'Net',
  detail: '$144.84 HKD',
}, {
  title: 'Status',
  detail: 'Succeeded',
}, {
  title: 'Description',
  detail: 'Invoice 7FCF2889-0007',
  canEdit: true
}])


const paymentMethodData = reactive([{
  title: 'ID',
  detail: 'card_1EJtKjAqkzzGorqL499SKn7w',
},
{
  title: 'Number',
  detail: '•••• 4242',
},
{
  title: 'Fingerprint',
  detail: 'QlfGjXhL3I1xfKVV',
  highlightStyle: true
},
{
  title: 'Expires',
  detail: '11 / 2028',
},
{
  title: 'Type',
  detail: 'Visa credit card',
},
{
  title: 'Issuer',
  detail: 'Stripe Payments UK Limited',
},
{
  title: 'Owner',
  detail: 'DANIEL CHAN',
},
{
  title: 'Address',
  detail: 'No address',
  emptyStyle: true,
}, {
  title: 'Origin',
  detail: 'United States',
  isCountry: true
},])

const ipData = reactive([{
  title: 'IP address',
  detail: 'Not provided',
  emptyStyle: true
},
{
  title: 'Distance between billing and',
  detail: 'No billing address or shipping',
  emptyStyle: true
},
{
  title: 'shipping address',
  detail: 'address provided',
  emptyStyle: true,
}])
const customerData = reactive([{
  title: 'Customer email',
  detail: 'sunfmin@gmail.com',
  highlightStyle: true
},
{
  title: 'Name',
  detail: 'DANIEL CHAN',
},
{
  title: 'Are name and email similar?',
  detail: 'Not available',
  emptyStyle: true,
},
{
  title: 'Authorization rate for transactions associated with this email (all time)',
  detail: 'Not available',
  emptyStyle: true,
},
{
  title: 'Related customers',
  detail: 'Not available',
  emptyStyle: true,
}])

const timeLimeComplex = reactive([
  {
    text: 'A draft invoice for $20.00 USD to in_1PF5w6AqkzzGorqL5PjnUVWC was finalized',
    time: '5/11/24, 11:50:59 AM',
    current: true
  },
  {
    text: 'in_1PF5w6AqkzzGorqL5PjnUVWC s payment for an invoice for $20.00 USD succeeded',
    time: '5/11/24, 11:50:59 AM'
  },
  {
    text: 'A draft invoice for $20.00 USD to in_1PF5w6AqkzzGorqL5PjnUVWC was finalized',
    time: 'May 11, 2024, 11:50 AM'
  },
  {
    text: 'A draft invoice for $20.00 USD to in_1PF5w6AqkzzGorqL5PjnUVWC was finalized',
    time: 'May 11, 2024, 11:50 AM'
  },
  {
    text: 'A draft invoice for $20.00 USD to in_1PF5w6AqkzzGorqL5PjnUVWC was finalized',
    time: 'May 11, 2024, 11:50 AM'
  },
  {
    text: 'A draft invoice for $20.00 USD to in_1PF5w6AqkzzGorqL5PjnUVWC was finalized',
    time: 'May 11, 2024, 11:50 AM'
  },
  {
    text: 'A draft invoice for $20.00 USD to in_1PF5w6AqkzzGorqL5PjnUVWC was finalized',
    time: 'May 11, 2024, 11:50 AM'
  },
])

const code = reactive({
  "id": "in_1PF5w6AqkzzGorqL5PjnUVWC",
  "object": "invoice",
  "payment_intent": "pi_3PF6xZAqkzzGorqL1DRq1u0T",
  "status": "paid",
  "amount_due": 2000,
  "charge": "ch_3PF6xZAqkzzGorqL1XI7mHQj",
  "currency": "usd",
  "customer": "cus_EnU6kQzzCfMtJ4",
  "default_payment_method": null,
  "default_source": null,
  "number": "7FCF2889-0007",
  "period_end": 1715395428,
  "period_start": 1712803428,
  "subscription": "sub_1OrASOAqkzzGorqLRuLbFqBM",
  "total": 2000
})

onMounted(() => {
  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/streets-v11'
  });

  Prism.highlightAll()
})

</script>

<style setup>
.tag-button {
  background: #d1fab3;
  border-color: #a8f170;
}

.line-numbers .line-numbers-rows {
  border: none;

  span::before {
    color: #a3acba;
  }
}

code span {
  line-height: 23px;
}

.gradient-bottom {
  width: 100%;
  height: 23px;
  background: linear-gradient(#8a636300, #fff);
  position: absolute;
  bottom: 0;
}

.filter-chip {
  transform: scale(70%);
  transform-origin: left;
}


</style>