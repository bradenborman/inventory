package inventory.daos;

import inventory.models.InventoryItem;
import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

@Repository
public class ItemDao {

    private final NamedParameterJdbcTemplate namedParameterJdbcTemplate;

    public ItemDao(NamedParameterJdbcTemplate namedParameterJdbcTemplate) {
        this.namedParameterJdbcTemplate = namedParameterJdbcTemplate;
    }

    public InventoryItem findItemById(String barcodeToRetrieve) {
        MapSqlParameterSource params = new MapSqlParameterSource();
        params.addValue("barcode", barcodeToRetrieve);

        return namedParameterJdbcTemplate.queryForObject("SELECT * FROM item WHERE barcode = :barcode LIMIT 1;",
                params, BeanPropertyRowMapper.newInstance(InventoryItem.class));
    }

}