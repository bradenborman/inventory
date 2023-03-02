package inventory.services;

import inventory.daos.ItemDao;
import inventory.models.InventoryItem;
import org.springframework.stereotype.Service;

@Service
public class ItemInquiry {

    private final ItemDao itemDao;

    public ItemInquiry(ItemDao itemDao) {
        this.itemDao = itemDao;
    }

    public InventoryItem lookupByBarcode(String barcode) {
      return itemDao.findItemById(barcode);
    }

}