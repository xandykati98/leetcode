impl Solution {
    pub fn roman_to_int(s: String) -> i32 {
        let mut next_can_be_negative_I = false;
        let mut next_can_be_negative_X = false;
        let mut next_can_be_negative_C = false;
        let mut counter = 0;

        for l in s.chars().rev().collect::<String>().chars() {
            match l {
                'I' => {
                    if next_can_be_negative_I {
                        counter-=1;
                        next_can_be_negative_I = false;
                    } else {
                        counter+=1;
                    }
                },
                'V' => {
                    counter+=5;
                    next_can_be_negative_I = true;
                },
                'X' => {
                    if next_can_be_negative_X {
                        counter-=10;
                        next_can_be_negative_X = false;
                    } else {
                        counter+=10;
                    }
                    next_can_be_negative_I = true;
                },
                'L' => {
                    counter+=50;
                    next_can_be_negative_X = true;
                },
                'C' => {
                    if next_can_be_negative_C {
                        counter-=100;
                        next_can_be_negative_C = false;
                    } else {
                        counter+=100;
                    }
                    next_can_be_negative_X = true;
                },
                'D' => {
                    counter+=500;
                    next_can_be_negative_C = true;
                },
                'M' => {
                    counter+=1000;
                    next_can_be_negative_C = true;
                },
                _ => (),
            }
        }

        return counter
    }
}