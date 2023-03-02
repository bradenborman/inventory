package inventory.controllers;

import inventory.models.InventoryItem;
import inventory.services.ItemInquiry;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class ItemInquiryControllerTest {

    @Mock
    private ItemInquiry itemInquiry;
    private ItemInquiryController itemInquiryController;

    @BeforeEach
    void setUp() {
        itemInquiryController = new ItemInquiryController(itemInquiry);
    }

    @Test
    public void testLookupBarcode() {
        // Given
        String barcodeData = "123456789";
        InventoryItem expectedItem = new InventoryItem();

        // When
        when(itemInquiry.lookupByBarcode(barcodeData)).thenReturn(expectedItem);
        InventoryItem actualItem = itemInquiryController.lookupBarcode(barcodeData);

        // Then
        verify(itemInquiry, times(1)).lookupByBarcode(barcodeData);
        assertEquals(expectedItem, actualItem);
    }
}