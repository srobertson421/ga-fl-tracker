angular.module('RecentPurchasesModule', [])
.component('recentPurchases', {
  templateUrl: 'app/components/recentPurchases/recentPurchases.html',
  controller: function() {
    this.title = 'Recent Purchases'
    this.purchases = [
      {
        product: 'Stuff',
        price: '$15'
      },
      {
        product: 'Stuff',
        price: '$15'
      },
      {
        product: 'Stuff',
        price: '$15'
      }
    ]
  }
});