using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SampleECommerce.Shared
{
    public class CartState
    {
        public List<KeyValuePair<ItemData, int>> CartItems { get; private set; } = new List<KeyValuePair<ItemData, int>>();

        public int CartCount { get; private set; } = 0;

        public event Action OnChange;

        public void AddToCart(ItemData item)
        {
            if (CartItems.Any(i => i.Key.Id == item.Id))
            {
                var newValue = CartItems.Single(i => i.Key.Id == item.Id).Value + 1;
                CartItems.Remove(CartItems.Single(i => i.Key.Id == item.Id));
                CartItems.Add(new KeyValuePair<ItemData, int>(item, newValue));
            }
            else
            {
                CartItems.Add(new KeyValuePair<ItemData, int>(item, 1));
            }
            CartItems = CartItems.OrderBy(c => c.Key.Id).ToList();
            ++CartCount;
            NotifyStateChanged();
        }

        public void RemoveFromCart(ItemData item)
        {
            if (CartItems.Any(i => i.Key.Id == item.Id))
            {
                var newValue = CartItems.Single(i => i.Key.Id == item.Id).Value - 1;
                CartItems.Remove(CartItems.Single(i => i.Key.Id == item.Id));
                if (newValue > 0)
                {
                    CartItems.Add(new KeyValuePair<ItemData, int>(item, newValue));
                }
                CartItems = CartItems.OrderBy(c => c.Key.Id).ToList();
                --CartCount;
                NotifyStateChanged();
            }
        }

        private void NotifyStateChanged()
        {
            OnChange?.Invoke();
        }
    }
}