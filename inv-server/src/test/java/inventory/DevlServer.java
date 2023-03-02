package inventory;

import org.springframework.boot.builder.SpringApplicationBuilder;

public class DevlServer extends InventoryApplication {

    public static void main(String[] args) {
        new DevlServer().configure(new SpringApplicationBuilder())
                .initializers()
                .profiles("local")
                .run(args);
    }

}