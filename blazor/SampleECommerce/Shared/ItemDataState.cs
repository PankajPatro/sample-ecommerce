using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace SampleECommerce.Shared
{
    public class ItemDataState
    {
        public List<ItemData> Items { get; private set; } = new List<ItemData>();

        private ItemData[] _Items;

        private string _SearchString = "";

        public string SearchString
        {
            get
            {
                return _SearchString;
            }
            set
            {
                _SearchString = value;
                FilterItems();
            }
        }

        private void FilterItems(){
            Items = _Items.Where(i => i.Category.StartsWith(_SearchString) || i.ImageTitle.StartsWith(_SearchString) || i.ImageDescription.StartsWith(_SearchString)).ToList();
            NotifyStateChanged();
        }

        public void LoadItems(ItemData[] items){
            _Items = items;
            FilterItems();
        }

        public event Action OnChange;

        private void NotifyStateChanged()
        {
            OnChange?.Invoke();
        }
    }
}