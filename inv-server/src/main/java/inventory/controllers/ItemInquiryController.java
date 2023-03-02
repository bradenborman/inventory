package inventory.controllers;

import inventory.models.InventoryItem;
import inventory.services.ItemInquiry;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/item-inquiry")
public class ItemInquiryController {

    private final ItemInquiry itemInquiry;

    public ItemInquiryController(ItemInquiry itemInquiry) {
        this.itemInquiry = itemInquiry;
    }

    @PostMapping("/barcode")
    public InventoryItem lookupBarcode(@RequestBody String barcode) {
        return itemInquiry.lookupByBarcode(barcode);
    }

}