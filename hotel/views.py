from django.shortcuts import render
from django.http import HttpResponse

def home(request):
    context = {
        'title': 'Welcome to Zaffran Restaurant',
        'tagline': 'Authentic Flavors of India — زعفران',
    }
    # Notice the folder name 'hotel' here
    return render(request, 'hotel/home.html', context)



# About Page
def about(request):
    context = {
        'title': 'About Zaffran',
        'description': (
            "Zaffran is a fine-dining Indian restaurant offering "
            "authentic cuisine crafted with passion, spices, and tradition."
        ),
    }
    return render(request, 'hotel/about.html', context)


#  Menu Page (static for now, easily upgradable to database later)
from django.shortcuts import render
from django.http import HttpResponse
from .models import MenuItem, Contact

# Menu Page
def menu_page(request):
    menu_items = MenuItem.objects.all()  # fetch all menu items from DB
    return render(request, 'hotel/menu.html', {
        'title': 'Our Menu',
        'menu_items': menu_items,
    })

# Contact Page
def contact(request):
    if request.method == "POST":
        name = request.POST.get("name")
        email = request.POST.get("email")
        message = request.POST.get("message")

        # Save contact message to DB
        Contact.objects.create(name=name, email=email, message=message)

        return HttpResponse(f"Thank you {name}, we’ve received your message!")

    return render(request, 'hotel/contact.html', {'title': 'Contact Us'})


# 404 Custom Error Page
def custom_404(request, exception):
    return render(request, '404.html', status=404)
