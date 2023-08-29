use wasm_bindgen::prelude::*;

#[global_allocator]
static ALLOC: wee_alloc::WeeAlloc = wee_alloc::WeeAlloc::INIT;

#[wasm_bindgen]
pub fn greet(name: &str) {
    alert(name)
}

#[wasm_bindgen]
extern "C" {
    pub fn alert(string: &str);
}

#[wasm_bindgen]
struct Snake {
    body: Vec<usize>,
}

#[wasm_bindgen]
struct World {
    width: usize,
}

#[wasm_bindgen]
impl Snake {
    pub fn new() -> Snake {
        Snake {
            body: vec![12, 13, 23, 33, 34, 35, 36],
        }
    }
    pub fn getBody(&self) -> Vec<usize> {
        self.body.clone()
    }
}

#[wasm_bindgen]
impl World {
    pub fn new() -> World {
        World { width: 8 }
    }

    pub fn getWidth(&self) -> usize {
        return self.width;
    }
}
