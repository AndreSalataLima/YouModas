class ProductsController < ApplicationController

  def index
    @products = Product.all
  end

  def show
    @products = Product.all(params[:id])
  end

end
