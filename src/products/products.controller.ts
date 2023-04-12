import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Post()
  async create(@Body() createProductDto: CreateProductDto) {
    const product = await this.productsService.create(createProductDto);
    return { message: 'Producto creado', product };
  }

  @Get()
  async findAll() {
    const products = await this.productsService.findAll();
    return { message: 'Productos encontrados', products };
  }

  @Get(':id')
  async findById(@Param('id') id: string) {
    const product = await this.productsService.findById(id);
    if (!product) {
      return { message: 'No se encontro el producto' };
    } else {
      return { message: 'Producto encontrado', product };
    }
  }

  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updateProductDto: UpdateProductDto,
  ) {
    const updatedProduct = await this.productsService.update(
      id,
      updateProductDto,
    );
    return updatedProduct;
  }

  @Delete(':id')
  async remove(@Param('id') id: string) {
    const newProducts = await this.productsService.remove(id);
    return { message: 'Producto eliminado. Lista actualizada:', newProducts };
  }
}
