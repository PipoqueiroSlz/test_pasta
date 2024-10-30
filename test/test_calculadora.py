from calculadora import Calculadora

import unittest

class TestCalculadora(unittest.TestCase):
    
    def setUp(self):
        self.calc = Calculadora()
    
    def test_soma(self):
        self.assertEqual(self.calc.soma(10, 10), 20, "Deve somar dois números")

if __name__ == "__main__":
    unittest.main()
    