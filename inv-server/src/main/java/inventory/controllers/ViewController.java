package inventory.controllers;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class ViewController {

    @GetMapping(value={"/", "/inventory", "/inventory/**"})
    public String index() {
        return "index";
    }

}
