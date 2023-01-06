updatecategory() {
                

                try {
                    let id = this.category.id
                    const formData = new FormData()
                    formData.append('categoryname', this.category.categoryname)
                    formData.append('categorydescription', this.category.categorydescription)
                    formData.append("_method", 'put')

                    const response = await axios.post("api/category/update/"+id, formData)
                    .then(res => {
                        console.log(res.data)
                    })
                    .then(() => {
                            this.$swal.fire({
                                icon: 'success',
                                title: 'Category updated succesfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                            this.$router.push("/category/viewcat")
                    })               
                } catch (error) {
                    console.error(error.response.data)
                }
            }